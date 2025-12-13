
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const QUESTIONS_FILE = path.join(__dirname, '../src/data/questions.json');
const DEFINITIONS_FILE = path.join(__dirname, '../src/data/definitions.json');

const questions = JSON.parse(fs.readFileSync(QUESTIONS_FILE, 'utf8'));
const definitions = JSON.parse(fs.readFileSync(DEFINITIONS_FILE, 'utf8'));

// Helper to flatten definitions map
const flatDefinitions = {};
Object.values(definitions).forEach(moduleDefs => {
    Object.entries(moduleDefs).forEach(([term, def]) => {
        flatDefinitions[term.toLowerCase()] = { term, def };
    });
});

let updatedCount = 0;

// Update specific reported question (ID 101 approx, but we search by text to be safe)
const rPrefixQuestion = questions.find(q => q.question.includes('In R, which function prefix is used to generate random numbers'));
if (rPrefixQuestion) {
    console.log('Found R prefix question:', rPrefixQuestion.id);
    // Use the definition from definitions.json if it exists, otherwise use the manual one from our plan
    const key = "r function prefixes";
    if (flatDefinitions[key]) {
        rPrefixQuestion.explanation = flatDefinitions[key].def;
        console.log('Updated explanation from definitions:', rPrefixQuestion.explanation);
        updatedCount++;
    } else {
        // Fallback if key slightly differs
        rPrefixQuestion.explanation = "`r` (random), `d` (density/probability), `p` (cumulative), `q` (quantile). e.g., `rnorm` generates random data.";
        console.log('Updated explanation manually.');
        updatedCount++;
    }
}

// Attempt to match others
questions.forEach(q => {
    if (q.explanation && q.explanation.includes('Answer derived from course materials')) {
        let matchFound = false;

        // Strategy A: Check if the CORRECT ANSWER matches a definition
        // This is high confidence. If the answer is "Sample" and we have a definition for "Sample", use it.
        if (q.options && q.answer !== undefined && q.options[q.answer]) {
            const correctAnswerText = q.options[q.answer];
            // Clean option text (sometimes has Markdown like **Sample**)
            const cleanAnswer = correctAnswerText.replace(/\*\*/g, '').trim();
            const answerLower = cleanAnswer.toLowerCase();

            if (flatDefinitions[answerLower]) {
                const defEntry = flatDefinitions[answerLower];
                q.explanation = `**${defEntry.term}** is defined as: ${defEntry.def}`;
                updatedCount++;
                matchFound = true;
            }
        }

        // Strategy B: Check if any definition term is in the question text (Fallback)
        if (!matchFound) {
            // Optimization: If T/F question, the concept is likely the subject, often bolded
            if (q.type === 'tf' || (q.options.length === 2 && q.options.includes('True'))) {
                const subjectMatch = q.question.match(/^\*\*([^*]+)\*\*/); // Matches **Term** at start
                if (subjectMatch) {
                    const subject = subjectMatch[1].toLowerCase();
                    // Try to find subject in definitions (check both keys and flattened)
                    if (flatDefinitions[subject]) {
                        q.explanation = `**${flatDefinitions[subject].term}**: ${flatDefinitions[subject].def}`;
                        updatedCount++;
                        matchFound = true;
                    }
                    // Try partial match if exact failed (e.g. "Standard Error" vs "Standard Error (SEM)")
                    if (!matchFound) {
                        const match = Object.values(flatDefinitions).find(d => d.term.toLowerCase().includes(subject));
                        if (match) {
                            q.explanation = `**${match.term}**: ${match.def}`;
                            updatedCount++;
                            matchFound = true;
                        }
                    }
                }
            }
        }

        if (!matchFound) {
            for (const [termLower, { term, def }] of Object.entries(flatDefinitions)) {
                // Avoid very short terms matching falsely e.g. "mean"
                if (termLower.length < 4) continue;

                if (q.question.toLowerCase().includes(termLower)) {
                    q.explanation = `The definition describes **${term}**.\n\n${def}`; // Slightly better phrasing
                    updatedCount++;
                    break;
                }
            }
        }
    }
});

fs.writeFileSync(QUESTIONS_FILE, JSON.stringify(questions, null, 2));
console.log(`Updated ${updatedCount} questions.`);
