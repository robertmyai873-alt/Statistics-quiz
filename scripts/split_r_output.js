
const fs = require('fs');
const path = require('path');

const questionsPath = '/Users/robertpaszek/Desktop/tilburg university /STATS 2 /Quiz_website/Stats-quiz/web-app/src/data/questions.json';

try {
    const data = fs.readFileSync(questionsPath, 'utf8');
    const questions = JSON.parse(data);

    let changedCount = 0;

    questions.forEach(q => {
        if (q.codeSnippet) {
            // Heuristic: Split by lines. 
            // - Lines starting with `>` are user commands (code).
            // - Also include lines that look like comments or follow-up commands if they are part of the input block.
            // - Everything else is output.

            // However, looking at the examples:
            // "codeSnippet": "> cor.test(df$stress, df$performance)\n\nPearson's product-moment correlation..."

            // Or:
            // "codeSnippet": "Call:\nlm(formula ...)\n\nCoefficients:..." 
            // In this case, there is no `>`. It seems the entire snippet might be output or a mix.

            // Strategy:
            // 1. If it starts with `>`, split on the first double newline `\n\n` or distinct separator where the output usually begins.
            // 2. If it DOES NOT start with `>` but looks like model output (e.g. "Call:", "Coefficients:"), 
            //    we might need to treat the "Call: ..." part as the 'code' (or rather, the model description) and the rest as output? 
            //    Actually, usually the User wants to see the command that generated the output.

            // Refined Strategy based on User Request "make sure that r output questions are working properly":
            // The user wants "CodeReveal". 
            // If the snippet contains "> ", that line is the Code. The rest is Output.
            // If the snippet starts with "Call:", that acts as the 'Code' (model specification), and the updated coefficients/results are the Output.

            const lines = q.codeSnippet.split('\n');
            let codeLines = [];
            let outputLines = [];
            let isOutput = false;

            // Pattern 1: Starts with command prompt `>`
            if (q.codeSnippet.trim().startsWith('>')) {
                for (let i = 0; i < lines.length; i++) {
                    const line = lines[i];
                    if (!isOutput) {
                        if (line.trim().startsWith('>')) {
                            codeLines.push(line);
                        } else if (line.trim() === '') {
                            // Empty line might separate code from output, or just be spacing.
                            // If next line doesn't start with >, assume start of output?
                            // But sometimes commands span lines.

                            // Let's assume the first block of `>` lines + non-empty lines immediately following are code?
                            // No, simplified: anything starting with `>` is code. 
                            // BUT wait, output follows immediately.

                            // Let's just take the FIRST line starting with `>` (and potential continuations +) as code.
                            // And everything after the first blank line as output?
                            codeLines.push(line); // Keep blank line in code for now?
                        } else {
                            // Line doesn't start with >. Is it output?
                            isOutput = true;
                            outputLines.push(line);
                        }
                    } else {
                        outputLines.push(line);
                    }
                }
            }
            // Pattern 2: "Call:" based output.
            else if (q.codeSnippet.trim().startsWith('Call:') || q.codeSnippet.trim().startsWith('Model 1:')) {
                // Usually the first paragraph is the call.
                // Split by first double newline.
                const parts = q.codeSnippet.split(/\n\n(.*)/s); // Split on first double newline
                if (parts.length >= 2) {
                    codeLines.push(parts[0]);
                    outputLines.push(parts[1] || ""); // capture the rest
                } else {
                    // Fallback: entire thing is code? Or entire thing is output?
                    // If we can't split, maybe keep it all as code and empty output?
                    // Or just leave it.
                    codeLines.push(q.codeSnippet);
                }
            }
            // Pattern 3: "Coefficients:" or other direct output
            else if (q.codeSnippet.trim().startsWith('Coefficients:') || q.codeSnippet.trim().startsWith('Random effects:')) {
                // This looks like PURE output.
                // We likely want to show NOTHING as code? Or show "Summary(model)" as implied code?
                // Let's treat the first line/block as 'Code' context if possible, or leave as is.
                // Actually, if it's pure output, maybe put it ALL in output and have code be "View Output"?
                // Let's safe-bet: Split first 2 lines as code? No.

                // Let's split by first blank line if exists.
                const parts = q.codeSnippet.split(/\n\n(.*)/s);
                if (parts.length >= 2) {
                    codeLines.push(parts[0]);
                    outputLines.push(parts[1] || "");
                } else {
                    codeLines.push(q.codeSnippet);
                }
            } else {
                // Default fallback
                const parts = q.codeSnippet.split(/\n\n(.*)/s);
                if (parts.length >= 2) {
                    codeLines.push(parts[0]);
                    outputLines.push(parts[1] || "");
                } else {
                    codeLines.push(q.codeSnippet);
                }
            }

            // Reconstruct
            const newCode = codeLines.join('\n').trim();
            const newOutput = outputLines.join('\n').trim();

            if (newOutput.length > 0 && newCode.length > 0) {
                q.codeSnippet = newCode;
                q.codeOutput = newOutput;
                changedCount++;
            }
        }
    });

    if (changedCount > 0) {
        fs.writeFileSync(questionsPath, JSON.stringify(questions, null, 2));
        console.log(`Successfully updated ${changedCount} questions.`);
    } else {
        console.log("No questions needed updating (or logic missed them).");
    }

} catch (err) {
    console.error("Error processing file:", err);
}
