#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

function analyzeQuestionBias(questionsFile) {
    const data = JSON.parse(fs.readFileSync(questionsFile, 'utf8'));
    const biasedQuestions = [];
    const stats = {
        totalMC: 0,
        longestIsCorrect: 0,
        extremeBias: [],
        severeBias: [],
        moderateBias: []
    };

    data.forEach(question => {
        if (question.type !== 'mc') return;
        
        stats.totalMC++;
        const options = question.options;
        const correctAnswer = question.answer;
        const correctText = options[correctAnswer];
        
        // Calculate lengths
        const lengths = options.map(opt => opt.length);
        const maxLength = Math.max(...lengths);
        const minLength = Math.min(...lengths);
        const correctLength = correctText.length;
        const avgIncorrectLength = lengths.filter((_, i) => i !== correctAnswer)
            .reduce((a, b) => a + b, 0) / (lengths.length - 1);
        
        const lengthDiff = correctLength - avgIncorrectLength;
        const isLongestCorrect = correctLength === maxLength;
        
        if (isLongestCorrect) stats.longestIsCorrect++;
        
        // Categorize bias severity
        const biasInfo = {
            id: question.id,
            question: question.question.substring(0, 100) + "...",
            correctLength,
            avgIncorrectLength: Math.round(avgIncorrectLength),
            lengthDiff: Math.round(lengthDiff),
            isLongestCorrect,
            maxLength,
            minLength,
            options: options.map((opt, i) => ({
                text: opt,
                length: opt.length,
                isCorrect: i === correctAnswer
            }))
        };
        
        if (lengthDiff > 50) {
            stats.extremeBias.push(biasInfo);
            biasedQuestions.push({ ...biasInfo, severity: 'EXTREME' });
        } else if (lengthDiff > 25) {
            stats.severeBias.push(biasInfo);
            biasedQuestions.push({ ...biasInfo, severity: 'SEVERE' });
        } else if (lengthDiff > 10 && isLongestCorrect) {
            stats.moderateBias.push(biasInfo);
            biasedQuestions.push({ ...biasInfo, severity: 'MODERATE' });
        }
    });
    
    // Generate report
    console.log('\n🔍 BIAS DETECTION REPORT');
    console.log('========================');
    console.log(`📊 Total MC Questions: ${stats.totalMC}`);
    console.log(`📏 Longest Option Correct: ${stats.longestIsCorrect} (${(stats.longestIsCorrect/stats.totalMC*100).toFixed(1)}%)`);
    console.log(`🚨 Extreme Bias (50+ chars): ${stats.extremeBias.length} questions`);
    console.log(`⚠️  Severe Bias (25-49 chars): ${stats.severeBias.length} questions`);
    console.log(`⚡ Moderate Bias (10-24 chars + longest): ${stats.moderateBias.length} questions`);
    
    console.log('\n🔥 TOP 10 MOST BIASED QUESTIONS:');
    console.log('=================================');
    
    biasedQuestions
        .sort((a, b) => b.lengthDiff - a.lengthDiff)
        .slice(0, 10)
        .forEach((q, i) => {
            console.log(`\n${i + 1}. ID ${q.id} [${q.severity}] (+${q.lengthDiff} chars)`);
            console.log(`   Q: ${q.question}`);
            console.log(`   Options:`);
            q.options.forEach((opt, j) => {
                const marker = opt.isCorrect ? '✅' : '❌';
                console.log(`     ${marker} [${opt.length}] ${opt.text.substring(0, 60)}${opt.text.length > 60 ? '...' : ''}`);
            });
        });
    
    // Save detailed report
    const reportPath = path.join(path.dirname(questionsFile), '../reports/bias-report.json');
    fs.mkdirSync(path.dirname(reportPath), { recursive: true });
    fs.writeFileSync(reportPath, JSON.stringify({
        timestamp: new Date().toISOString(),
        stats,
        biasedQuestions: biasedQuestions.sort((a, b) => b.lengthDiff - a.lengthDiff)
    }, null, 2));
    
    console.log(`\n📄 Detailed report saved to: ${reportPath}`);
    
    return biasedQuestions;
}

// Auto-run for now
const questionsFile = process.argv[2] || 
    '/Users/robertpaszek/Desktop/tilburg university /STATS 2 /Quiz_website/Stats-quiz/web-app/src/data/questions.json';

try {
    analyzeQuestionBias(questionsFile);
} catch (error) {
    console.error('❌ Error:', error.message);
    console.error(error);
    process.exit(1);
}

export { analyzeQuestionBias };