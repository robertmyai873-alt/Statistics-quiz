const fs = require('fs');
const path = require('path');
// const stringSimilarity = require('string-similarity'); // Removed dependency

// Since I can't easily install new packages, I'll write a simple matching function.

const questionsPath = path.join(__dirname, '../web-app/src/data/questions.json');
const definitionsPath = path.join(__dirname, '../web-app/src/data/definitions.json');

const questions = JSON.parse(fs.readFileSync(questionsPath, 'utf8'));
const definitionsRaw = JSON.parse(fs.readFileSync(definitionsPath, 'utf8'));

// Flatten definitions
const glossary = {};
Object.values(definitionsRaw).forEach(moduleDefs => {
    Object.entries(moduleDefs).forEach(([term, def]) => {
        glossary[term] = def;
    });
});

const glossaryTerms = Object.keys(glossary);

// Helper to calculate relevance score
function calculateScore(questionText, term) {
    const qText = questionText.toLowerCase();
    const tText = term.toLowerCase();

    if (qText.includes(tText)) return 10; // High score for exact term presence

    // Check for partial words overlap
    const qWords = qText.split(/\W+/).filter(w => w.length > 3);
    const tWords = tText.split(/\W+/).filter(w => w.length > 3);

    let matchCount = 0;
    tWords.forEach(tw => {
        if (qWords.includes(tw)) matchCount++;
    });

    if (matchCount > 0 && matchCount === tWords.length) return 8; // All words of term present
    if (matchCount > 0) return matchCount;

    return 0;
}

let updatedCount = 0;

questions.forEach(q => {
    let explanation = q.explanation || "";
    const isGeneric =
        explanation.trim() === "" ||
        explanation.includes("Answer derived from course materials") ||
        explanation.trim() === "Answer Key:" ||
        explanation.trim().replace("Answer Key:", "").length < 5;

    const isAnswerKey = explanation.includes("Answer Key:");

    if (isGeneric || isAnswerKey) {
        // Attempt to find definition
        let bestTerm = null;
        let maxScore = 0;

        glossaryTerms.forEach(term => {
            const score = calculateScore(q.question, term);
            if (score > maxScore) {
                maxScore = score;
                bestTerm = term;
            }
        });

        if (maxScore > 0 && bestTerm) {
            const defText = glossary[bestTerm];
            const newExplanationPart = `**${bestTerm}**: ${defText}`;

            if (isGeneric && !isAnswerKey) {
                q.explanation = newExplanationPart;
                updatedCount++;
            } else if (isAnswerKey) {
                // If it's an answer key with some content, we might want to keep it or replace it?
                // User said "missing answers", implying the current ones are insufficient.
                // If "Answer Key:" is followed by numbers/math, keep it.
                // If "Answer Key:" is empty, replace it.

                if (explanation.trim() === "Answer Key:" || explanation.trim() === "Answer Key:") {
                    q.explanation = newExplanationPart;
                    updatedCount++;
                } else {
                    // It has content. Start with definition, then show answer key note.
                    // Or just append definition.
                    // Let's prepend the definition.
                    if (!explanation.includes(bestTerm)) {
                        q.explanation = `${newExplanationPart}\n\n${explanation}`;
                        updatedCount++;
                    }
                }
            }
        } else {
            // No definition found.
            // If truly empty/generic, placeholder needed?
            // User wants EVERY SINGLE QUESTION.
            // If we can't find a def, we might leave it or flag it.
            // For now, let's just log it.
            // console.log(`No definition found for Q: ${q.question.substring(0, 50)}...`);
        }
    }
});

fs.writeFileSync(questionsPath, JSON.stringify(questions, null, 2));
console.log(`Updated ${updatedCount} explanations.`);
