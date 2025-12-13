#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

class QuestionBiasFixer {
    constructor() {
        this.fixStrategies = {
            shortenCorrect: this.shortenCorrectAnswer.bind(this),
            expandIncorrect: this.expandIncorrectAnswers.bind(this),
            balanced: this.balancedApproach.bind(this)
        };
    }

    fixBiasedQuestions(questionsFile, options = {}) {
        const { strategy = 'balanced', dryRun = true, maxDifference = 15 } = options;
        
        const data = JSON.parse(fs.readFileSync(questionsFile, 'utf8'));
        const fixes = [];
        let fixedCount = 0;

        data.forEach(question => {
            if (question.type !== 'mc') return;
            
            const fix = this.analyzeAndFix(question, strategy, maxDifference);
            if (fix.needsFix) {
                fixes.push(fix);
                if (!dryRun) {
                    question.options = fix.newOptions;
                }
                fixedCount++;
            }
        });

        if (!dryRun) {
            const backupPath = questionsFile.replace('.json', '_backup.json');
            fs.writeFileSync(backupPath, fs.readFileSync(questionsFile));
            fs.writeFileSync(questionsFile, JSON.stringify(data, null, 2));
            console.log(`✅ Fixed ${fixedCount} questions. Backup saved to ${backupPath}`);
        } else {
            console.log(`🔍 DRY RUN: Found ${fixedCount} questions that need fixing`);
        }

        this.generateFixReport(fixes, dryRun);
        return fixes;
    }

    analyzeAndFix(question, strategy, maxDifference) {
        const options = [...question.options];
        const correctIndex = question.answer;
        const correctText = options[correctIndex];
        
        const lengths = options.map(opt => opt.length);
        const correctLength = correctText.length;
        const avgIncorrectLength = lengths.filter((_, i) => i !== correctIndex)
            .reduce((a, b) => a + b, 0) / (lengths.length - 1);
        
        const lengthDiff = correctLength - avgIncorrectLength;
        const needsFix = lengthDiff > maxDifference;
        
        if (!needsFix) {
            return { needsFix: false };
        }

        const newOptions = this.fixStrategies[strategy](options, correctIndex, maxDifference);
        
        return {
            needsFix: true,
            questionId: question.id,
            strategy,
            originalLengthDiff: Math.round(lengthDiff),
            newLengthDiff: this.calculateNewLengthDiff(newOptions, correctIndex),
            originalOptions: options,
            newOptions,
            question: question.question.substring(0, 100) + "..."
        };
    }

    shortenCorrectAnswer(options, correctIndex, maxDifference) {
        const newOptions = [...options];
        const correctText = newOptions[correctIndex];
        const avgIncorrectLength = options.filter((_, i) => i !== correctIndex)
            .reduce((acc, opt) => acc + opt.length, 0) / (options.length - 1);
        
        const targetLength = Math.max(avgIncorrectLength + maxDifference, 20);
        
        if (correctText.length > targetLength) {
            newOptions[correctIndex] = this.smartTruncate(correctText, targetLength);
        }
        
        return newOptions;
    }

    expandIncorrectAnswers(options, correctIndex, maxDifference) {
        const newOptions = [...options];
        const correctLength = options[correctIndex].length;
        const minIncorrectLength = correctLength - maxDifference;
        
        newOptions.forEach((option, i) => {
            if (i !== correctIndex && option.length < minIncorrectLength) {
                newOptions[i] = this.expandOption(option, minIncorrectLength);
            }
        });
        
        return newOptions;
    }

    balancedApproach(options, correctIndex, maxDifference) {
        const newOptions = [...options];
        const originalCorrectLength = options[correctIndex].length;
        const originalIncorrectLengths = options.filter((_, i) => i !== correctIndex).map(opt => opt.length);
        const avgIncorrectLength = originalIncorrectLengths.reduce((a, b) => a + b, 0) / originalIncorrectLengths.length;
        
        const targetCorrectLength = Math.min(originalCorrectLength, avgIncorrectLength + maxDifference);
        const minIncorrectLength = Math.max(15, targetCorrectLength - maxDifference);
        
        // Adjust correct answer if needed
        if (originalCorrectLength > targetCorrectLength) {
            newOptions[correctIndex] = this.smartTruncate(options[correctIndex], targetCorrectLength);
        }
        
        // Expand short incorrect answers
        newOptions.forEach((option, i) => {
            if (i !== correctIndex && option.length < minIncorrectLength) {
                newOptions[i] = this.expandOption(option, minIncorrectLength);
            }
        });
        
        return newOptions;
    }

    smartTruncate(text, targetLength) {
        if (text.length <= targetLength) return text;
        
        // Try to find a good breaking point
        const breakPoints = ['. ', ', ', ' and ', ' or ', ' but ', ' - '];
        
        for (const breakPoint of breakPoints) {
            const index = text.lastIndexOf(breakPoint, targetLength - 3);
            if (index > targetLength * 0.7) {
                return text.substring(0, index + breakPoint.length - 1).trim();
            }
        }
        
        // If no good break point, truncate at word boundary
        const truncated = text.substring(0, targetLength - 3);
        const lastSpace = truncated.lastIndexOf(' ');
        
        if (lastSpace > targetLength * 0.8) {
            return truncated.substring(0, lastSpace) + '...';
        }
        
        return truncated + '...';
    }

    expandOption(text, minLength) {
        if (text.length >= minLength) return text;
        
        const expansions = [
            ' (in statistics)',
            ' methodology',
            ' in research',
            ' approach',
            ' technique',
            ' in data analysis',
            ' method',
            ' in CSAI'
        ];
        
        // Add appropriate expansion
        for (const expansion of expansions) {
            const expanded = text + expansion;
            if (expanded.length >= minLength && expanded.length < minLength + 10) {
                return expanded;
            }
        }
        
        // If still too short, add generic padding
        const padding = ' '.repeat(minLength - text.length);
        return text + padding.replace(/ /g, ' (additional context)').substring(0, minLength - text.length);
    }

    calculateNewLengthDiff(options, correctIndex) {
        const correctLength = options[correctIndex].length;
        const avgIncorrectLength = options.filter((_, i) => i !== correctIndex)
            .reduce((acc, opt) => acc + opt.length, 0) / (options.length - 1);
        return Math.round(correctLength - avgIncorrectLength);
    }

    generateFixReport(fixes, dryRun) {
        if (fixes.length === 0) {
            console.log('✅ No questions need fixing!');
            return;
        }

        console.log(`\n📋 ${dryRun ? 'FIX PREVIEW' : 'FIX SUMMARY'}`);
        console.log('='.repeat(50));
        console.log(`Questions processed: ${fixes.length}`);
        
        const byStrategy = fixes.reduce((acc, fix) => {
            acc[fix.strategy] = (acc[fix.strategy] || 0) + 1;
            return acc;
        }, {});
        
        Object.entries(byStrategy).forEach(([strategy, count]) => {
            console.log(`${strategy}: ${count} questions`);
        });
        
        console.log('\n🔧 TOP 5 FIXES:');
        fixes.slice(0, 5).forEach((fix, i) => {
            console.log(`\n${i + 1}. ID ${fix.questionId} (${fix.originalLengthDiff} → ${fix.newLengthDiff})`);
            console.log(`   Q: ${fix.question}`);
            console.log(`   Strategy: ${fix.strategy}`);
        });

        if (dryRun) {
            console.log('\n⚡ To apply fixes, run with --apply flag');
        }
    }
}

// Auto-run with preview
const args = process.argv.slice(2);
const questionsFile = args.find(arg => arg.endsWith('.json')) || 
    '/Users/robertpaszek/Desktop/tilburg university /STATS 2 /Quiz_website/Stats-quiz/web-app/src/data/questions.json';

const options = {
    strategy: args.includes('--balanced') ? 'balanced' :
             args.includes('--shorten') ? 'shortenCorrect' :
             args.includes('--expand') ? 'expandIncorrect' : 'balanced',
    dryRun: !args.includes('--apply'),
    maxDifference: parseInt(args.find(arg => arg.startsWith('--max='))?.split('=')[1]) || 15
};

const fixer = new QuestionBiasFixer();

try {
    fixer.fixBiasedQuestions(questionsFile, options);
} catch (error) {
    console.error('❌ Error:', error.message);
    console.error(error);
    process.exit(1);
}

export default QuestionBiasFixer;