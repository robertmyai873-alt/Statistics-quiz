import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle, XCircle, ArrowRight, ArrowLeft } from 'lucide-react';
import questionsData from '../data/questions.json';
import CodeReveal from './CodeReveal';
import 'katex/dist/katex.min.css';
import Latex from 'react-latex-next';

const QuizScreen = ({ onFinish, questions, onBack }) => {
    const dataset = questions || questionsData;


    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [selectedOption, setSelectedOption] = useState(null);
    const [isAnswered, setIsAnswered] = useState(false);
    const [score, setScore] = useState(0);
    const [answers, setAnswers] = useState([]); // { questionId, isCorrect, userAns, correctAns }

    // Helper to render bold (**text**) and italic (*text*)
    const formatText = (text) => {
        if (!text) return null;
        if (typeof text !== 'string') return text; // Safety check

        // Split by ** for bold
        const parts = text.split(/(\*\*.*?\*\*|\*.*?\*)/g);

        return parts.map((part, index) => {
            if (part.startsWith('**') && part.endsWith('**')) {
                return <strong key={index}><Latex>{part.slice(2, -2)}</Latex></strong>;
            } else if (part.startsWith('*') && part.endsWith('*')) {
                return <em key={index}><Latex>{part.slice(1, -1)}</Latex></em>;
            }
            return <Latex key={index}>{part}</Latex>;
        });
    };

    // Safety check for empty dataset
    if (!dataset || dataset.length === 0) {
        return (
            <div className="glass-panel" style={{ textAlign: 'center', padding: '2rem' }}>
                <h3>No questions found for this module.</h3>
                <button onClick={onBack} className="btn-primary" style={{ marginTop: '1rem' }}>
                    Go Back
                </button>
            </div>
        );
    }

    const question = dataset[currentQuestionIndex];
    const totalQuestions = dataset.length;

    // Safety check for invalid question index
    if (!question) {
        return (
            <div className="glass-panel" style={{ textAlign: 'center', padding: '2rem' }}>
                <h3>Error: Question not found.</h3>
                <p>Index: {currentQuestionIndex}, Total: {totalQuestions}</p>
                <button onClick={onBack} className="btn-primary" style={{ marginTop: '1rem' }}>
                    Go Back
                </button>
            </div>
        );
    }

    // Handle TF questions which might be missing options in the JSON
    let options = question.options;
    let answerIndex = question.answer;

    if (question.type === 'tf') {
        if (!options || options.length === 0) {
            options = ["True", "False"];
        }
        // Normalize boolean answer to index if needed
        if (typeof answerIndex === 'boolean') {
            answerIndex = answerIndex ? 0 : 1; // True is index 0, False is index 1
        }
    }

    const handleOptionClick = (index) => {
        if (isAnswered) return;
        setSelectedOption(index);
        setIsAnswered(true);

        // Use normalized answerIndex
        const isCorrect = index === answerIndex;
        if (isCorrect) {
            setScore((prev) => prev + 1);
        }

        // Save answer detail
        setAnswers((prev) => [
            ...prev,
            {
                question: question,
                userAnswerIndex: index,
                isCorrect: isCorrect
            }
        ]);
    };

    const handleNext = () => {
        if (currentQuestionIndex < totalQuestions - 1) {
            setCurrentQuestionIndex((prev) => prev + 1);
            setSelectedOption(null);
            setIsAnswered(false);
        } else {
            onFinish(score, answers);
        }
    };

    const progressPercentage = ((currentQuestionIndex) / totalQuestions) * 100;

    return (
        <div style={{ width: '100%', maxWidth: '800px', margin: '0 auto', position: 'relative' }}>
            {/* Back Button - Fixed/Absolute Top Left */}
            <button
                onClick={onBack}
                style={{
                    position: 'fixed',
                    top: '40px',
                    left: '40px',
                    background: 'white',
                    border: 'none',
                    cursor: 'pointer',
                    color: '#DD6B20',
                    padding: '10px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderRadius: '8px', // Slightly rounded
                    boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
                    zIndex: 1000,
                    transition: 'transform 0.2s',
                    fontWeight: 'bold'
                }}
                onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
                onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
                aria-label="Back to Menu"
            >
                <ArrowLeft size={20} style={{ marginRight: '5px' }} />
                Back
            </button>

            <div className="progress-bar-container">
                <div
                    className="progress-bar-fill"
                    style={{ width: `${((currentQuestionIndex + 1) / totalQuestions) * 100}%` }}
                />
            </div>

            <AnimatePresence mode="wait">
                <motion.div
                    key={currentQuestionIndex}
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -50 }}
                    transition={{ duration: 0.3 }}
                    className="glass-panel"
                    style={{ textAlign: 'left' }}
                >
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                            <span style={{ color: '#94a3b8', fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '1px' }}>
                                Question {currentQuestionIndex + 1} / {totalQuestions}
                            </span>
                        </div>
                    </div>

                    <h2 style={{ fontSize: '1.5rem', marginBottom: '2rem', lineHeight: '1.4' }}>
                        {formatText(question.question)}
                    </h2>

                    {/* Integrated CodeReveal Component */}
                    {question.codeSnippet && (
                        <CodeReveal
                            code={question.codeSnippet}
                            output={question.codeOutput}
                        />
                    )}

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                        {options && options.map((option, index) => {
                            let statusClass = '';
                            if (isAnswered) {
                                if (index === answerIndex) statusClass = 'correct';
                                else if (index === selectedOption) statusClass = 'incorrect';
                            }

                            return (
                                <div
                                    key={index}
                                    className={`option-card ${selectedOption === index ? 'selected' : ''} ${statusClass}`}
                                    onClick={() => handleOptionClick(index)}
                                    style={{ pointerEvents: isAnswered ? 'none' : 'auto' }}
                                >
                                    <div style={{
                                        width: '30px',
                                        height: '30px',
                                        borderRadius: '50%',
                                        background: 'rgba(255,255,255,0.1)',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        marginRight: '1rem',
                                        flexShrink: 0
                                    }}>
                                        {String.fromCharCode(65 + index)}
                                    </div>
                                    <span style={{ flex: 1 }}>{option}</span>
                                    {statusClass === 'correct' && <CheckCircle size={20} color="#22c55e" />}
                                    {statusClass === 'incorrect' && <XCircle size={20} color="#ef4444" />}
                                </div>
                            );
                        })}
                        {!options && <p style={{ color: 'red' }}>Error: Options missing for this question.</p>}
                    </div>

                    {isAnswered && (
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            style={{ marginTop: '2rem', padding: '1.5rem', background: 'white', borderRadius: '16px', boxShadow: '0 4px 6px rgba(0,0,0,0.1)', border: '1px solid #FED7D7' }}
                        >
                            <h4 style={{ margin: '0 0 0.5rem 0', color: '#DD6B20', fontSize: '1.1rem' }}>Explanation</h4>
                            <p style={{ margin: 0, color: '#C05621' }}>{formatText(question.explanation)}</p>
                        </motion.div>
                    )}

                    <div style={{ marginTop: '2rem', display: 'flex', justifyContent: 'flex-end' }}>
                        <motion.button
                            className="btn-primary"
                            onClick={handleNext}
                            disabled={!isAnswered}
                            whileHover={{ scale: isAnswered ? 1.05 : 1 }}
                            whileTap={{ scale: isAnswered ? 0.95 : 1 }}
                            style={{ opacity: isAnswered ? 1 : 0.5, cursor: isAnswered ? 'pointer' : 'not-allowed', display: 'flex', alignItems: 'center', gap: '8px' }}
                        >
                            {currentQuestionIndex === totalQuestions - 1 ? 'Finish Quiz' : 'Next Question'}
                            <ArrowRight size={18} />
                        </motion.button>
                    </div>

                </motion.div>
            </AnimatePresence>
        </div>
    );
};

export default QuizScreen;
