
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const QUESTIONS_FILE = path.join(__dirname, '../src/data/questions.json');
const MARKDOWN_FILE = path.join(__dirname, '../stats_materials/exam-questions-gemini3.md');

// Answer key for the first 100 questions (Modules 1-4)
const MANUAL_ANSWERS = {
    1: 2, 2: 3, 3: 2, 4: 1, 5: 1, 6: 1, 7: 2, 8: 3, 9: 1, 10: 1,
    11: 1, 12: 0, 13: 2, 14: 2, 15: 2, 16: 1, 17: 1, 18: 1, 19: 2, 20: 2,
    21: 1, 22: 1, 23: 2, 24: 1, 25: 2, 26: 1, 27: 1, 28: 2, 29: 2, 30: 0,
    31: 0, 32: 1, 33: 1, 34: 0, 35: 2, 36: 2, 37: 1, 38: 2, 39: 1, 40: 1,
    41: 1, 42: 2, 43: 1, 44: 1, 45: 1, 46: 2, 47: 1, 48: 1, 49: 0, 50: 2,
    51: 1, 52: 0, 53: 1, 54: 1, 55: 1, 56: 1, 57: 2, 58: 3, 59: 1, 60: 1,
    61: 2, 62: 0, 63: 2, 64: 1, 65: 1, 66: 1, 67: 1, 68: 1, 69: 1, 70: 0,
    71: 1, 72: 1, 73: 1, 74: 3, 75: 1, 76: 1, 77: 2, 78: 2, 79: 1, 80: 1,
    81: 1, 82: 1, 83: 2, 84: 0, 85: 1, 86: 3, 87: 0, 88: 1, 89: 2, 90: 0,
    91: 0, 92: 1, 93: 0, 94: 2, 95: 2, 96: 2, 97: 1, 98: 1, 99: 0, 100: 1
};

function parseMarkdown(markdown) {
    const lines = markdown.split('\n');
    const questions = [];
    let currentQuestion = null;
    let parsingOptions = false;
    let codeBlock = [];
    let inCodeBlock = false;

    // Map to store parsed answer keys from the file (Set 2)
    const parsedKeys = {};
    let parsingAnswerKey = false;
    let sectionCount = 0; // 0 = Set 1 (Module 1-4), 1 = Set 2 (Module 4-8), etc.

    const saveQuestion = () => {
        if (currentQuestion) {
            currentQuestion.question = currentQuestion.question.trim();
            if (codeBlock.length > 0) {
                currentQuestion.codeSnippet = codeBlock.join('\n').trim();
                codeBlock = [];
            }

            // Set 1 (Module 1-4) Hardcoded answers
            if (sectionCount === 0 && currentQuestion.answer === null) {
                const manualIndex = MANUAL_ANSWERS[currentQuestion.number];
                if (manualIndex !== undefined) {
                    currentQuestion.answer = manualIndex;
                    currentQuestion.explanation = "Answer derived from course materials (Module 1-4).";
                }
            }

            // Set 2 (Module 4-8) - Answer will be applied later from parsedKeys if null
            if (sectionCount === 1 && currentQuestion.answer === null) {
                // Defer resolution
                // Mark as Set 2 for later processing
                currentQuestion.isSet2 = true;
            }

            // Only add if we have an answer or expecting one
            if (currentQuestion.answer !== null || currentQuestion.isSet2) {
                if (currentQuestion.options.length === 2 &&
                    currentQuestion.options[0].toLowerCase().includes('true') &&
                    currentQuestion.options[1].toLowerCase().includes('false')) {
                    currentQuestion.type = 'tf';
                }

                // Cleanup Options
                const cleanedOptions = currentQuestion.options.map(o => o.replace(/^(\*?\s*)?[A-D][\.\)]\s*/, '').trim());

                const entry = {
                    type: currentQuestion.type,
                    question: currentQuestion.question,
                    options: cleanedOptions,
                    answer: currentQuestion.answer,
                    explanation: currentQuestion.explanation,
                    id: 9000 + questions.length, // Temporary ID
                    textId: currentQuestion.number,
                    isSet2: currentQuestion.isSet2,
                    module: currentQuestion.module // Save the module
                };

                if (currentQuestion.codeSnippet) {
                    entry.codeSnippet = currentQuestion.codeSnippet;
                    entry.codeOutput = "Output hidden for quiz mode";
                }

                questions.push(entry);
            }
        }
    };

    const questionRegex = /^(\d+)\.\s+\*\*(.*?)\*\*$/;
    const questionRegexText = /^(\d+)\.\s+\*\*(.*?)\*\*(.*)/;

    // Detect Section Breaks
    // "MODULES 4 - 8"
    const sectionRegex = /^MODULES?\s+\d+/i;
    const moduleRegex = /^###\s+\*\*(Module\s+\d+.*?)\*\*/i; // Matches: ### **Module 1: Name**

    let currentModule = "Uncategorized";

    for (let i = 0; i < lines.length; i++) {
        const line = lines[i].trim();

        if (line.match(sectionRegex)) {
            // New section detected.
            parsingAnswerKey = false; // Reset answer key parsing

            if (line.toUpperCase().includes("MODULES 4 - 8")) {
                sectionCount = 1;
            }
        }

        const modMatch = line.match(moduleRegex);
        if (modMatch) {
            // Extract module name, e.g. "Module 1: Introduction & Probability"
            currentModule = modMatch[1].trim();
        }

        if (line.includes("### **Answer Key**")) {
            parsingAnswerKey = true;
            saveQuestion(); // Save pending question
            currentQuestion = null;
            continue;
        }

        if (parsingAnswerKey) {
            // Parse Key: "1. A (Expl)"
            const keyMatch = line.match(/^(\d+)\.\s+([A-D])\s*(.*)/);
            if (keyMatch) {
                const num = parseInt(keyMatch[1]);
                const char = keyMatch[2];
                const expl = keyMatch[3] ? keyMatch[3].replace(/^\(/, '').replace(/\)$/, '') : '';
                const map = { 'A': 0, 'B': 1, 'C': 2, 'D': 3 };
                parsedKeys[num] = { answer: map[char], explanation: expl };
            }
            continue; // Skip normal processing
        }

        // Check for code block delimiters
        // Handle standard start/end
        if (line.startsWith('```')) {
            if (inCodeBlock && line.length > 3 && !line.includes(' ')) {
                // Standard closing
                inCodeBlock = !inCodeBlock;
            } else if (!inCodeBlock) {
                // Standard opening
                inCodeBlock = true;
            } else {
                // Already in code block, and this line starts with ```
                // Could be nested or just messy. Treat as toggle.
                inCodeBlock = !inCodeBlock;
            }
            continue;
        }

        // Handle messy closing (e.g. content... ```)
        if (inCodeBlock && line.endsWith('```') && !line.startsWith('```')) {
            // Append the content part
            codeBlock.push(line.substring(0, line.length - 3));
            inCodeBlock = false;
            continue;
        }

        if (inCodeBlock) {
            codeBlock.push(line);
            continue;
        }

        let match = line.match(questionRegex);
        if (!match) match = line.match(questionRegexText);
        let num, text;

        if (match) {
            saveQuestion();
            num = parseInt(match[1]);
            text = match[2];
            if (match[3]) text += match[3];
        } else {
            match = line.match(/^(\d+)\.\s+\*\*(.*)\*\*/);
            if (!match) match = line.match(/^\*\*\s*(\d+)\.\s+(.*)\*\*$/);

            if (match) {
                saveQuestion();
                num = parseInt(match[1]);
                text = match[2];
            } else {
                match = line.match(/^\*\*(\d+)\.\s+(.*)/);
                if (match) {
                    saveQuestion();
                    num = parseInt(match[1]);
                    text = match[2].replace(/\*\*$/, '');
                } else {
                    // Handle escaped asterisks case: \*\*100.
                    match = line.match(/^\\+\*\*(\d+)\.\s+(.*)/);
                    if (match) {
                        saveQuestion();
                        num = parseInt(match[1]);
                        text = match[2].replace(/\*\*.*$/, ''); // Clean trailing
                    }
                }
            }
        }

        if (match) {
            currentQuestion = {
                number: num,
                question: text,
                options: [],
                answer: null,
                explanation: '',
                type: 'mc',
                codeSnippet: null,
                module: currentModule // Assign current module
            };
            parsingOptions = true;
            continue;
        }

        if (currentQuestion && parsingOptions && currentQuestion.options.length === 0 && !line.match(/^(\*?\s*)?[A-D][\.\)]/) && !line.startsWith('**Answer')) {
            if (line.length > 0) currentQuestion.question += '\n' + line;
            continue;
        }

        const optionMatch = line.match(/^(\*?\s*)?([A-D])[\.\)]\s+(.*)/);
        if (currentQuestion && optionMatch) {
            currentQuestion.options.push(optionMatch[3]);
            continue;
        }

        // Detect Inline Answer (e.g. Module 12)
        // Matches: "**Answer:** B", "* **Answer:** B", " **Answer:** B"
        const answerMatch = line.match(/^(\*?\s*)?\*\*Answer:?\*\*\s*([A-D])\s*(.*)/);
        if (currentQuestion && answerMatch) {
            const char = answerMatch[2];
            const explanation = answerMatch[3] ? answerMatch[3].replace(/^\(/, '').replace(/\)$/, '') : '';

            const map = { 'A': 0, 'B': 1, 'C': 2, 'D': 3 };
            currentQuestion.answer = map[char];
            currentQuestion.explanation = explanation;
        }
    }
    saveQuestion();

    // Apply Parsed Keys to Set 2 Questions
    questions.forEach(q => {
        if (q.isSet2 && q.answer === null) {
            const k = parsedKeys[q.textId];
            if (k) {
                q.answer = k.answer;
                q.explanation = "Answer Key: " + k.explanation;
            }
        }
        delete q.isSet2;
    });

    // Remove questions that still have null answers (failed to map)
    return questions.filter(q => q.answer !== null);
}

function mergeQuestions(newQuestions) {
    let existing = [];
    if (fs.existsSync(QUESTIONS_FILE)) {
        existing = JSON.parse(fs.readFileSync(QUESTIONS_FILE, 'utf8'));
    }

    let maxId = existing.reduce((max, q) => Math.max(max, q.id || 0), 0);

    let addedCount = 0;
    let updatedCount = 0;
    newQuestions.forEach(q => {
        const existingQ = existing.find(ex => ex.question === q.question || ex.question.includes(q.question.substring(0, 50)));
        if (existingQ) {
            // Update explanation if the new one is available and different
            if (q.explanation && q.explanation !== existingQ.explanation) {
                existingQ.explanation = q.explanation;
                updatedCount++;
            }
            // Update answer if missing
            if (existingQ.answer === undefined || existingQ.answer === null) {
                existingQ.answer = q.answer;
                updatedCount++;
            }
            // Update module if missing or different
            if (!existingQ.module || (q.module && existingQ.module !== q.module)) {
                existingQ.module = q.module;
                updatedCount++;
            }
        } else {
            q.id = ++maxId;
            delete q.textId;
            existing.push(q);
            addedCount++;
        }
    });

    console.log(`Updated ${updatedCount} existing questions.`);

    fs.writeFileSync(QUESTIONS_FILE, JSON.stringify(existing, null, 2));
    console.log(`Imported ${addedCount} new questions. Total questions now: ${existing.length}`);
}

const content = fs.readFileSync(MARKDOWN_FILE, 'utf8');
const parsed = parseMarkdown(content);
console.log(`Parsed ${parsed.length} questions from markdown.`);
mergeQuestions(parsed);
