const fs = require('fs');
const path = require('path');

const markdownPath = '/Users/robertpaszek/Desktop/tilburg university /STATS 2 /Quiz_website/Stats-quiz/web-app/stats_materials/exam-questions-gemini3.md';
const questionsPath = '/Users/robertpaszek/Desktop/tilburg university /STATS 2 /Quiz_website/Stats-quiz/web-app/src/data/questions.json';

try {
    const markdownContent = fs.readFileSync(markdownPath, 'utf8');
    const existingQuestions = JSON.parse(fs.readFileSync(questionsPath, 'utf8'));

    // Find the highest ID to continue from
    let nextId = existingQuestions.reduce((max, q) => Math.max(max, q.id), 0) + 1;
    let newQuestions = [];

    // Load extra manual questions
    const extraQuestionsPath = '/Users/robertpaszek/Desktop/tilburg university /STATS 2 /Quiz_website/Stats-quiz/scripts/extra_r_questions.json';
    if (fs.existsSync(extraQuestionsPath)) {
        const extraQuestions = JSON.parse(fs.readFileSync(extraQuestionsPath, 'utf8'));
        extraQuestions.forEach(q => {
            // Assign new ID
            q.id = nextId++;
            newQuestions.push(q);
        });
        console.log(`Loaded ${extraQuestions.length} manual extra questions.`);
    }

    const lines = markdownContent.split('\n');
    let currentQuestion = null;
    let currentModule = "General";

    for (let i = 0; i < lines.length; i++) {
        const line = lines[i].trim();

        // Detect Module headers
        if (line.startsWith('### **Module')) {
            currentModule = line.replace('### **', '').replace('**', '').trim();
            // Simplify module name if needed
            continue;
        }

        // Detect new question start: "42. **Question:**" or "1. **Question**"
        const questionStartMatch = line.match(/^(\d+)\.\s+\*\*(Question:)?\s*(.*)\*\*$/) || line.match(/^(\d+)\.\s+\*\*(.*)$/);

        if (questionStartMatch) {
            // Save previous question
            if (currentQuestion && (currentQuestion.codeSnippet || currentQuestion.question.includes("R Output"))) {
                // Format validation
                if (currentQuestion.options.length > 0 && currentQuestion.answer !== null) {
                    const exists = existingQuestions.some(q =>
                        q.question.includes(currentQuestion.question.substring(0, 50))
                    );
                    if (!exists) {
                        currentQuestion.id = nextId++;
                        newQuestions.push(currentQuestion);
                    }
                }
            }

            // Start new question
            let qText = questionStartMatch[3] || questionStartMatch[2];
            // Remove "[Mock R Output]" from text if present, as it's meta-data
            qText = qText.replace('**[Mock R Output]**', '').trim();
            qText = qText.replace('[Mock R Output]', '').trim();

            currentQuestion = {
                id: 0,
                type: 'mc',
                question: qText,
                options: [],
                answer: 0,
                explanation: "",
                module: currentModule,
                codeSnippet: null,
                codeOutput: null
            };
        } else if (currentQuestion) {

            // Capture Code Block
            if (line.startsWith('```')) {
                let codeBlock = "";
                let lang = line.replace('```', '').trim(); // r or text
                i++;
                while (i < lines.length && !lines[i].startsWith('```')) {
                    codeBlock += lines[i] + "\n";
                    i++;
                }

                // If we already have a snippet, append? Or replace? 
                // Usually one per question.
                currentQuestion.codeSnippet = codeBlock.trim();

                // Heuristic: if lang is 'text' and looks like output, maybe put it in codeOutput?
                // But CodeReveal usually takes the 'codeSnippet' and user splits it?
                // Or we can pre-split it here.

                // If the block contains "Call:", "Coefficients:", it's likely output.
                // Just keep it in codeSnippet for now, consistent with other questions.
            }
            // Capture Options
            else if (line.match(/^(\* )?[A-D]\) /) || line.match(/^(\* )?[A-D]\. /)) {
                // Matches "* A) Option" or "A. Option"
                let optText = line.replace(/^(\* )?[A-D][\)\.]\s+/, '').trim();
                currentQuestion.options.push(optText);
            }
            // Capture Answer
            else if (line.match(/^\*\s*\*\*Answer:\*\*\s*([A-D])/i) || line.match(/^\*\*Answer:\*\*\s*([A-D])/i)) {
                const match = line.match(/Answer:\*\*\s*([A-D])/i);
                if (match) {
                    const char = match[1].toUpperCase();
                    currentQuestion.answer = char.charCodeAt(0) - 65; // A=0, B=1...

                    // Capture Explanation (rest of the line)
                    // e.g. "B (The main effect...)"
                    const expl = line.substring(match.index + match[0].length).trim();
                    if (expl.startsWith('(') && expl.endsWith(')')) {
                        currentQuestion.explanation = expl.substring(1, expl.length - 1);
                    } else {
                        currentQuestion.explanation = expl;
                    }
                }
            }
        }
    }

    // Check last question
    if (currentQuestion && (currentQuestion.codeSnippet || currentQuestion.question.includes("R Output"))) {
        if (currentQuestion.options.length > 0 && currentQuestion.answer !== null) {
            const exists = existingQuestions.some(q =>
                q.question.includes(currentQuestion.question.substring(0, 50))
            );
            if (!exists) {
                currentQuestion.id = nextId++;
                newQuestions.push(currentQuestion);
            }
        }
    }

    console.log(`Found ${newQuestions.length} new R questions.`);

    if (newQuestions.length > 0) {
        const finalQuestions = [...existingQuestions, ...newQuestions];
        fs.writeFileSync(questionsPath, JSON.stringify(finalQuestions, null, 2));
        console.log(`Saved to ${questionsPath}`);
    } else {
        console.log("No new questions to save.");
    }

} catch (err) {
    console.error(err);
}
