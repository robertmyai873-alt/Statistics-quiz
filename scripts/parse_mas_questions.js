const fs = require('fs');
const path = require('path');

// Configuration
const PROJECT_ROOT = path.resolve(__dirname, '..');
const INPUT_DIR = path.resolve(PROJECT_ROOT, '../MAS_exam_materials');
const OUTPUT_FILE = path.resolve(PROJECT_ROOT, 'web-app/src/data/questions.json');
const DEFINITIONS_FILE = path.resolve(PROJECT_ROOT, 'web-app/src/data/definitions.json');

const INPUT_FILES = [
    'Exam_questions-1.md',
    'Exam_questions-2.md',
    'exam_questions-3.md'
];

// Regex Patterns
const SECTION_REGEX = /^##\s+(?:Section\s+\d+:?|(\d+)\.)\s*(.*)$/i;
// Matches "**1.** Question text" or "1. **Question text**" or "**Q1.** Question text"
const QUESTION_START_REGEX = /^(?:\*\*)?(?:Q)?(\d+)\.(?:\*\*)?\s+(.*)/;
const OPTION_REGEX = /^-\s+([A-D])\)\s+(.*)/;
const ANSWER_REGEX = /^\*\*Answer:\s+([A-D])\*\*(?:\s+-\s+(.*))?/;
// Alternative answer format found in file 2: "**Answer: B**" (checked above) 
// but sometimes explanations are on new lines or just absent.

let allQuestions = [];
let definitions = {};

function parseFile(filename) {
    const filePath = path.join(INPUT_DIR, filename);
    if (!fs.existsSync(filePath)) {
        console.error(`File not found: ${filePath}`);
        return;
    }

    const content = fs.readFileSync(filePath, 'utf-8');
    const lines = content.split('\n');

    let currentModule = "General";
    let currentQuestion = null;
    let questionsInFile = 0;

    for (let i = 0; i < lines.length; i++) {
        let line = lines[i].trim();
        
        // Skip empty lines
        if (!line) continue;

        // Check for Section/Module Header
        const sectionMatch = line.match(SECTION_REGEX);
        if (sectionMatch) {
            // Normalize module name
            const rawTitle = sectionMatch[2] || sectionMatch[1]; // handle "## 1. Emergence" vs "## Section 1: Emergence"
            // If rawTitle is missing (e.g. "## 1. "), try to use the number
            currentModule = sectionMatch[0].replace(/^##\s+/, '').trim();
            console.log(`Found Module: ${currentModule}`);
            continue;
        }

        // Check for Question Start
        const questionMatch = line.match(QUESTION_START_REGEX);
        if (questionMatch) {
            // Save previous question
            if (currentQuestion) {
                allQuestions.push(currentQuestion);
                questionsInFile++;
            }

            // Start new question
            currentQuestion = {
                id: allQuestions.length + 1,
                type: "mc",
                question: questionMatch[2].replace(/\*\*/g, '').trim(), // Remove bolding if inside text
                options: [],
                answer: null,
                explanation: "",
                module: currentModule
            };
            continue;
        }

        // Check for Options
        const optionMatch = line.match(OPTION_REGEX);
        if (currentQuestion && optionMatch) {
            currentQuestion.options.push(optionMatch[2].trim());
            continue;
        }

        // Check for Answer
        const answerMatch = line.match(ANSWER_REGEX);
        if (currentQuestion && answerMatch) {
            const letter = answerMatch[1];
            // Convert A,B,C,D to 0,1,2,3
            const index = letter.charCodeAt(0) - 'A'.charCodeAt(0);
            currentQuestion.answer = index;
            
            if (answerMatch[2]) {
                currentQuestion.explanation = answerMatch[2].trim();
            }
            continue;
        }
        
        // Check for Answer line that didn't match strict regex or extra explanation lines
        if (currentQuestion && line.startsWith('**Answer:')) {
             // specific fallback for loose formats
             const looseMatch = line.match(/\*\*Answer:\s+([A-D])\*\*/);
             if (looseMatch) {
                 const letter = looseMatch[1];
                 currentQuestion.answer = letter.charCodeAt(0) - 'A'.charCodeAt(0);
                 // Look for explanation content after format "**Answer: B** - Explanation"
                 const parts = line.split('** - ');
                 if (parts.length > 1) {
                     currentQuestion.explanation = parts[1].trim();
                 }
             }
        }
    }

    // Push last question
    if (currentQuestion) {
        allQuestions.push(currentQuestion);
        questionsInFile++;
    }
    
    console.log(`Parsed ${questionsInFile} questions from ${filename}`);
}

function generateDefinitions() {
    // Extract definitions from explanations where possible
    // Pattern: "**Term** is defined as..." or "The definition describes **Term**."
    
    allQuestions.forEach(q => {
        if (!q.explanation) return;
        
        // Simple extraction heuristic
        if (q.explanation.includes(" is defined as: ")) {
             const parts = q.explanation.split(" is defined as: ");
             const termWithBold = parts[0];
             const def = parts[1];
             const term = termWithBold.replace(/\*\*/g, '');
             if (!definitions[q.module]) definitions[q.module] = [];
             definitions[q.module].push({ term, definition: def });
        }
    });
}

function main() {
    console.log("Starting MAS Question Parsing...");
    
    INPUT_FILES.forEach(file => parseFile(file));

    // generateDefinitions(); // Optional, but let's stick to just questions first to ensure stability.
    // Actually, clearing definitions.json is part of the plan.
    const cleanDefinitions = {}; 
    
    console.log(`Total questions parsed: ${allQuestions.length}`);
    
    // Write Questions
    fs.writeFileSync(OUTPUT_FILE, JSON.stringify(allQuestions, null, 2));
    console.log(`Wrote questions to ${OUTPUT_FILE}`);

    // Write Definitions (Empty for now to clear stats stuff)
    fs.writeFileSync(DEFINITIONS_FILE, JSON.stringify(cleanDefinitions, null, 2));
    console.log(`Cleared definitions in ${DEFINITIONS_FILE}`);
}

main();
