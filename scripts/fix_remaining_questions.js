const fs = require('fs');
const path = require('path');

const questionsPath = path.join(__dirname, '../web-app/src/data/questions.json');
const questions = JSON.parse(fs.readFileSync(questionsPath, 'utf8'));
const definitionsRaw = JSON.parse(fs.readFileSync(path.join(__dirname, '../web-app/src/data/definitions.json'), 'utf8'));

// Helper to get definition text
function getDef(term) {
    for (const mod of Object.values(definitionsRaw)) {
        if (mod[term]) return mod[term];
    }
    return "";
}

const manualFixes = {
    206: "Check the R output to identify the correct correlation coefficient and p-value.",
    221: "**R-squared**: " + getDef("R-squared") + " (Related to SS_T).",
    235: "Interpret the coefficients and significance levels from the summary output.",
    239: "**DFBETAS**: " + getDef("DFBETAS"),
    248: "Evaluate the model comparison metrics (AIC, BIC, or ANOVA results).",
    274: "**Centering**: " + getDef("Centering"),
    283: "**Reporting Results**: " + getDef("Reporting Results"),
    295: "The first number in F(df1, df2) represents the degrees of freedom for the model (predictors).",
    198: "**z.test package**: The `easystats` / `correlation` package provides a convenient way to visualize and report complex correlation matrices." // Fix for the bad one
};

let count = 0;
questions.forEach(q => {
    if (manualFixes[q.id]) {
        q.explanation = manualFixes[q.id];
        count++;
    }
});

fs.writeFileSync(questionsPath, JSON.stringify(questions, null, 2));
console.log(`Manually fixed ${count} questions.`);
