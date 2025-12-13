import { motion } from 'framer-motion';
import { RefreshCcw, ThumbsUp, AlertCircle, CheckCircle, XCircle } from 'lucide-react';

const ResultScreen = ({ score, totalQuestions, answers, onRestart }) => {
    const percentage = Math.round((score / totalQuestions) * 100);

    let feedback = "";
    if (percentage >= 80) feedback = "Excellent work! You've mastered this module.";
    else if (percentage >= 60) feedback = "Good job! A little more practice and you'll be perfect.";
    else feedback = "Keep practicing! You're learning.";

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="glass-panel"
            style={{ textAlign: 'center', padding: '3rem 2rem', maxWidth: '600px', margin: '0 auto' }}
        >
            <div style={{ marginBottom: '2rem' }}>
                {percentage >= 60 ? (
                    <ThumbsUp size={64} color="#48BB78" style={{ margin: '0 auto' }} />
                ) : (
                    <AlertCircle size={64} color="#ECC94B" style={{ margin: '0 auto' }} />
                )}
            </div>

            <h2 style={{ fontSize: '2.5rem', marginBottom: '0.5rem' }}>
                {score} / {totalQuestions}
            </h2>
            <p style={{ fontSize: '1.25rem', color: '#94a3b8', marginBottom: '2rem' }}>
                {percentage}% Correct
            </p>

            <p style={{ fontSize: '1.1rem', marginBottom: '3rem', lineHeight: '1.6' }}>
                {feedback}
            </p>

            <div style={{ textAlign: 'left', marginBottom: '3rem' }}>
                <h3 style={{ borderBottom: '1px solid #e2e8f0', paddingBottom: '0.5rem', marginBottom: '1rem' }}>Review</h3>
                <div style={{ maxHeight: '300px', overflowY: 'auto', paddingRight: '1rem' }}>
                    {answers.map((ans, idx) => (
                        <div key={idx} style={{ marginBottom: '1rem', padding: '1rem', background: ans.isCorrect ? 'rgba(72,187,120,0.1)' : 'rgba(245,101,101,0.1)', borderRadius: '8px' }}>
                            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem' }}>
                                {ans.isCorrect ? <CheckCircle size={18} color="green" /> : <XCircle size={18} color="red" />}
                                <div>
                                    <p style={{ margin: '0 0 0.5rem 0', fontWeight: 'bold', fontSize: '0.9rem' }}>{ans.question.question}</p>
                                    <p style={{ margin: 0, fontSize: '0.85rem' }}>
                                        Correct: <span style={{ fontWeight: 'bold' }}>{ans.question.options ? ans.question.options[ans.question.answer] : (ans.question.answer ? "True" : "False")}</span>
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <button
                className="btn-primary"
                onClick={onRestart}
                style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', margin: '0 auto' }}
            >
                <RefreshCcw size={20} />
                Try Another Module
            </button>
        </motion.div>
    );
};

export default ResultScreen;
