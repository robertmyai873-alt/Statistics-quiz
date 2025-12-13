const fs = require('fs');
const path = require('path');

const questionsPath = path.join(__dirname, '../web-app/src/data/questions.json');
const questions = JSON.parse(fs.readFileSync(questionsPath, 'utf8'));

let changeCount = 0;

const patterns = [
    /\s*\(in statistics\)\s*$/i,
    /\s*methodology\s*$/i,
    /\s*approach\s*$/i,
    /\s*in data analysis\s*$/i,
    /\s*\(additional context\)\s*$/i,
    /\s*\(addi\s*$/i
];

function cleanText(text) {
    let original = text;
    let modified = text;

    // Iterate patterns and remove them
    for (const pattern of patterns) {
        modified = modified.replace(pattern, '');
    }

    // Clean up trailing dots if double (e.g. "..") or if we stripped something and left a hanging char if needed
    // But mostly we just want to remove the text.
    // Also trims whitespace
    modified = modified.trim();

    if (original !== modified) {
        // console.log(`Changed: "${original}" -> "${modified}"`);
        changeCount++;
    }
    return modified;
}

questions.forEach(q => {
    if (q.options) {
        q.options = q.options.map(opt => cleanText(opt));
    }
});

fs.writeFileSync(questionsPath, JSON.stringify(questions, null, 2));

console.log(`Cleaned ${changeCount} options.`);
