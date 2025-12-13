const fs = require('fs');
const path = require('path');

const markdownPath = '/Users/robertpaszek/Desktop/tilburg university /STATS 2 /Quiz_website/Stats-quiz/web-app/stats_materials/exam-questions-gemini3.md';
const questionsPath = '/Users/robertpaszek/Desktop/tilburg university /STATS 2 /Quiz_website/Stats-quiz/web-app/src/data/questions.json';

try {
    const markdownContent = fs.readFileSync(markdownPath, 'utf8');
    const existingQuestions = JSON.parse(fs.readFileSync(questionsPath, 'utf8'));

    // Find the highest ID to continue from
    let nextId = existingQuestions.reduce((max, q) => Math.max(max, q.id), 0) + 1;

    // Helper to escape regex
    function escapeRegExp(string) {
        return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    }

    // Heuristic parsing
    // Looking for questions that contain R code blocks formatted like ```r ... ```
    // and have options and an answer.

    // Split by "---" separators if present, or just iterate through lines?
    // The file seems to be a long markdown.

    // Regex strategy:
    // Match a block starting with a number, then question text, 
    // THEN a code block ```r ... ```
    // THEN options
    // This is tricky because the order might vary slightly or there might be text between question and code.

    // Better strategy: Split the file into "Questions".
    // Questions usually start with `**N. Question Text**` or `N. **Question Text**`.

    const questionRegex = /(\d+)\.\s+(\*\*.*?\*\*|.*?)\n/g;

    // We can't easily splitting by regex because it consumes the separator.
    // Let's iterate through lines and build question objects.

    const lines = markdownContent.split('\n');
    let currentQuestion = null;
    let newQuestions = [];

    let currentModule = "Unknown Module";

    for (let i = 0; i < lines.length; i++) {
        const line = lines[i].trim();

        // Detect Module headers
        if (line.startsWith('### **Module')) {
            currentModule = line.replace('### **', '').replace('**', '').trim();
            continue;
        }

        // Detect new question start: "123. **Question**"
        const questionStartMatch = line.match(/^(\d+)\.\s+\*\*(.*)\*\*$/) || line.match(/^(\d+)\.\s+\*\*(.*)$/);

        if (questionStartMatch) {
            // Save previous question if it was an R question
            if (currentQuestion && currentQuestion.codeSnippet) {
                // Check if it already exists (fuzzy match on text)
                const exists = existingQuestions.some(q =>
                    q.question.includes(currentQuestion.question.substring(0, 50))
                );

                if (!exists) {
                    currentQuestion.id = nextId++;
                    newQuestions.push(currentQuestion);
                }
            }

            // Start new question
            currentQuestion = {
                id: 0,
                type: 'mc', // assume mc
                question: questionStartMatch[2],
                options: [],
                answer: 0, // placeholder
                explanation: "",
                module: currentModule,
                codeSnippet: null,
                codeOutput: null
            };
        } else if (currentQuestion) {
            // Parse content of current question

            // Check for code block start
            if (line.startsWith('```r')) {
                // Capture code block
                let codeBlock = "";
                i++; // Skip ```r
                while (i < lines.length && !lines[i].startsWith('```')) {
                    codeBlock += lines[i] + "\n";
                    i++;
                }
                currentQuestion.codeSnippet = codeBlock.trim();

                // Try to split snippet and output if possible (heuristic)
                // If the block contains "Call:" or ">", it might be mixed code/output.
                // For now, we put it all in codeSnippet, and rely on `split_r_output.js` to refine it later?
                // Or do it here.

                // Let's do a simple split here if we see "> "
                if (currentQuestion.codeSnippet.includes("> ")) {
                    const parts = currentQuestion.codeSnippet.split('\n');
                    const codeLines = parts.filter(l => l.startsWith('>'));
                    const outLines = parts.filter(l => !l.startsWith('>'));
                    // This acts as a filter, removing context. Maybe split at first non-> line?
                    // Let's stick to putting it in codeSnippet and letting the other script handle detailed splitting
                    // OR better: Just put it in codeSnippet. The user wants "interpreting R output".
                }

            }
            // Check for Options: "A. Option" or "* A. Option"
            else if (line.match(/^(\* )?[A-D]\. /)) {
                const optText = line.replace(/^(\* )?[A-D]\. /, '').trim();
                currentQuestion.options.push(optText);
            }
            // Check for Answer/Explanation if formatted in the text (rare in this file? usually separate key)
            // The file has "Answer Key:" in some explanations?
            // Actually, looks like some questions have "Answer Key:" inline? UNLIKELY based on previous view.

            // Wait, looking at file view: 
            // 199 in Questions.json has "Answer Key:" in explanation.
            // But in the source markdown, where are the answers?

            // I need to check where answers are located. 
            // In the file extract I saw earlier:
            // 25. The sum of probabilities...
            // 160: ---
            // 162: ### **Module 2: Sampling Theory**

            // I don't see answers in the question blocks I viewed!
            // I might be parsing questions without answers if I'm not careful.
            // CHECK where the answers are.
        }
    }

    // Check the last question
    if (currentQuestion && currentQuestion.codeSnippet) {
        const exists = existingQuestions.some(q =>
            q.question.includes(currentQuestion.question.substring(0, 50))
        );
        if (!exists) {
            currentQuestion.id = nextId++;
            newQuestions.push(currentQuestion);
        }
    }

    // Check for Answer Key at the bottom
    // Format usually: 
    // ## Answer Key
    // 1. C
    // 2. D

    // We need to parse the whole file for the answer key section.
    const answerKeyRegex = /ANSWER KEY|## Answers|### **Answers/i;
    const answerSectionMatch = markdownContent.match(answerKeyRegex);

    let answers = {};
    if (answerSectionMatch) {
        const answerSectionStart = answerSectionMatch.index;
        const answerSection = markdownContent.substring(answerSectionStart);
        const answerLines = answerSection.split('\n');

        answerLines.forEach(line => {
            const match = line.match(/^(\d+)\.\s+([A-D])/);
            if (match) {
                answers[parseInt(match[1])] = match[2];
            }
        });
    }

    // Assign answers to new questions
    newQuestions.forEach(q => {
        // The question ID in the file corresponds to the number we parsed "123. Question"
        // But we stored that in `q.fileId`? No we didn't store it.
        // We need to store original ID to map answer.
    });

    // Let's modify the loop above to store original ID

    // ... (This replacing is getting complicated, let's just rewrite the file securely in next step)
    console.log("Answers found:", Object.keys(answers).length);


    console.log(`Found ${newQuestions.length} potential new R questions.`);

    // Now we have a problem: Use `import_questions.js` logic which probably already handles this file?
    // Wait, `exam-questions-gemini3.md` was ALREADY imported partially?
    // The user said "missing explanations report" and "missing questions".

    // If I can't find answers in the file, I can't import them correctly.
    // Let me check the END of the file for an answer key.

} catch (err) {
    console.error(err);
}
