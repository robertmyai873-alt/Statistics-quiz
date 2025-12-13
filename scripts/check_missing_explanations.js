const fs = require('fs');
const path = require('path');

const questionsPath = path.join(__dirname, '../web-app/src/data/questions.json');
try {
    const questions = JSON.parse(fs.readFileSync(questionsPath, 'utf8'));

    // Group by module (if exists) or 'Unknown'
    const missingByModule = {};
    const allMissing = [];

    questions.forEach(q => {
        let explanation = q.explanation;
        if (!explanation) explanation = "";

        // Check for "Answer Key:" with little to no content
        const cleaned = explanation.replace("Answer Key:", "").trim();
        const isMissing = explanation === "" || cleaned.length < 5; // Heuristic: less than 5 chars after stripping prefix

        // Also include the target modules specifically if requested by user
        // The user mentioned modules 3, 4, 5, 6, 7, 8.
        // We should be strict with these.

        if (isMissing) {
            const mod = q.module || 'Unknown Module';
            if (!missingByModule[mod]) missingByModule[mod] = [];
            missingByModule[mod].push(q.id);
            allMissing.push({ id: q.id, question: q.question, module: mod, currentExplanation: q.explanation });
        }
    });

    console.log('--- Missing Explanations Report (Enhanced) ---');
    for (const [mod, ids] of Object.entries(missingByModule)) {
        console.log(`${mod}: ${ids.length} questions missing explanations.`);
    }
    console.log(`Total missing: ${allMissing.length}`);

    fs.writeFileSync(path.join(__dirname, 'missing_explanations_report.json'), JSON.stringify(allMissing, null, 2));

} catch (err) {
    console.error("Error reading questions.json:", err);
}
