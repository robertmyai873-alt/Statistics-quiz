
const fs = require('fs');
const path = require('path');

const questionsPath = path.join(__dirname, '../web-app/src/data/questions.json');
const definitionsPath = path.join(__dirname, 'data/definitions.json');

const questions = JSON.parse(fs.readFileSync(questionsPath, 'utf8'));
const definitionsData = JSON.parse(fs.readFileSync(definitionsPath, 'utf8'));

// Flatten definitions
const allDefinitions = {}; // Term -> Def
const allDefinitionsReverse = {}; // Def -> Term
const allDefValues = [];

Object.values(definitionsData).forEach(moduleDefs => {
    Object.entries(moduleDefs).forEach(([term, def]) => {
        allDefinitions[term] = def;
        allDefinitionsReverse[def] = term;
        allDefValues.push(def);
    });
});

let fixedCount = 0;
let partiallyFixedCount = 0;
let manualCheckNeeded = [];

function cleanText(text) {
    return text.replace(/\.\.\.$/, '').trim();
}

questions.forEach((q, qIndex) => {
    if (q.type !== 'mc') return;

    let modified = false;

    q.options = q.options.map((opt, optIndex) => {
        if (!opt.includes('...')) return opt;

        const cleanOpt = cleanText(opt);

        // Strategy 1: Exact prefix match in definitions.json
        // Find definitions that start with the clean option (allowing for some fuzziness or plain exact start)
        // We filter out very short matches to avoid false positives
        if (cleanOpt.length < 10) return opt;

        // Try to match against all known definitions
        const matches = allDefValues.filter(def => def.includes(cleanOpt) || def.startsWith(cleanOpt));

        if (matches.length === 1) {
            console.log(`[FIX] Question ${q.id}: replaced truncated option with dictionary definition.\nOld: ${opt}\nNew: ${matches[0]}`);
            modified = true;
            return matches[0];
        }

        // Strategy 2: Check explanation
        // If this is the CORRECT answer, the explanation likely contains it.
        // Even if it's not, the explanation might define the distractors (though less likely in this dataset format).
        // Format often: "**Term** matches definition..." or "**Term** is defined as: Definition"

        if (q.explanation) {
            // Look for the cleanOpt string in the explanation
            if (q.explanation.includes(cleanOpt)) {
                // Try to extract the full sentence containing it.
                // This is tricky. Let's try to see if the explanation *is* the definition basically.
                // Many explanations are: "**Term**: Definition."
                // Let's see if we can extract the definition part.
                const parts = q.explanation.split(/:\s*/);
                if (parts.length > 1) {
                    const potentialDef = parts.slice(1).join(': ').trim(); // Take everything after first colon
                    if (potentialDef.includes(cleanOpt)) {
                        // We found the chunk in the definition part of explanation.
                        // Let's use the potentialDef, but replace any trailing text if it seems like "extra" commentary?
                        // For now, replacing with the potentialDef seems safer than "..."
                        // Use the matched part of the explanation
                        console.log(`[FIX-EXPL] Question ${q.id}: derived from explanation.\nOld: ${opt}\nNew: ${potentialDef}`);
                        modified = true;
                        return potentialDef;
                    }
                }

                // Fallback: just search for the sentence in explanation containing the text
                const sentences = q.explanation.split('.');
                const matchSentence = sentences.find(s => s.includes(cleanOpt));
                if (matchSentence) {
                    const final = matchSentence.trim() + ".";
                    console.log(`[FIX-EXPL-SENT] Question ${q.id}: derived from explanation sentence.\nOld: ${opt}\nNew: ${final}`);
                    modified = true;
                    return final;
                }
            }
        }

        // Strategy 3: Heuristic for "extra context" truncation like "(additional context)..."
        // If it looks like trash text at the end, maybe we just cut it? 
        // User said: "substitute it but with the same amount of words" -> implies restoring content.

        // manualCheckNeeded.push({id: q.id, opt});
        manualCheckNeeded.push({
            id: q.id,
            question: q.question,
            explanation: q.explanation,
            truncated_option: opt,
            option_index: optIndex
        });
        return opt;
    });

    if (modified) fixedCount++;
});

console.log(`\nFixed ${fixedCount} questions.`);
console.log(`Unable to fix ${manualCheckNeeded.length} options. Writing report to truncated_report.json`);

fs.writeFileSync(questionsPath, JSON.stringify(questions, null, 2));
fs.writeFileSync(path.join(__dirname, 'truncated_report.json'), JSON.stringify(manualCheckNeeded, null, 2));
