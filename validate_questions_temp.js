
const fs = require('fs');
const path = require('path');

const questionsPath = '/Users/robertpaszek/Desktop/tilburg university /STATS 2 /Quiz_website/Stats-quiz/web-app/src/data/questions.json';

try {
    const data = fs.readFileSync(questionsPath, 'utf8');
    const questions = JSON.parse(data);

    console.log(`Loaded ${questions.length} questions.`);

    let issues = 0;
    let rQuestions = 0;

    questions.forEach((q, index) => {
        // Check explanation
        if (q.explanation && typeof q.explanation !== 'string') {
            console.log(`[Error] Question ${q.id} (index ${index}) explanation is not a string:`, typeof q.explanation);
            issues++;
        }

        // Check options
        if (!q.options || !Array.isArray(q.options)) {
            // Some question types might not have options? (e.g. input?)
            if (q.type === 'mc' || q.type === 'tf') {
                console.log(`[Error] Question ${q.id} (index ${index}) missing options or not array.`);
                issues++;
            }
        }

        // Check R Output questions
        if (q.codeSnippet) {
            rQuestions++;
        }
    });

    console.log(`Found ${issues} data issues.`);
    console.log(`Found ${rQuestions} questions with codeSnippet.`);

} catch (err) {
    console.error("Failed to read or parse questions.json:", err);
}
