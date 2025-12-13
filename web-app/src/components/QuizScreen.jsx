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

    return (
        <div style={{
            width: '100%',
            maxWidth: '700px', // Slightly narrower for better focus
            margin: '0 auto',
            minHeight: '100vh',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            padding: '2rem',
            position: 'relative'
        }}>
            {/* Back Button - Cleaner look */}
            <button
                onClick={onBack}
                className="glass-panel"
                style={{
                    position: 'fixed',
                    top: '70px',
                    left: '120px',
                    padding: '8px 16px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    color: 'rgba(255,255,255,0.7)',
                    background: 'rgba(0,0,0,0.2)', // Slightly darker background for contrast against page
                    border: '1px solid rgba(255,255,255,0.1)',
                    borderRadius: '8px',
                    cursor: 'pointer',
                    fontSize: '0.9rem',
                    transition: 'all 0.2s',
                    zIndex: 1000,
                    backdropFilter: 'blur(10px)'
                }}
                onMouseEnter={(e) => {
                    e.currentTarget.style.color = 'white';
                    e.currentTarget.style.borderColor = 'rgba(255,255,255,0.3)';
                }}
                onMouseLeave={(e) => {
                    e.currentTarget.style.color = 'rgba(255,255,255,0.7)';
                    e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)';
                }}
            >
                <ArrowLeft size={18} />
                Back
            </button>

            {/* Progress Bar - Integrated look */}
            <div style={{ marginBottom: '2rem', display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <span style={{ color: '#94a3b8', fontSize: '0.85rem', whiteSpace: 'nowrap' }}>
                    {Math.round(((currentQuestionIndex + 1) / totalQuestions) * 100)}%
                </span>
                <div style={{
                    flex: 1,
                    height: '6px',
                    background: 'rgba(255,255,255,0.1)',
                    borderRadius: '3px',
                    overflow: 'hidden'
                }}>
                    <div
                        style={{
                            height: '100%',
                            width: `${((currentQuestionIndex + 1) / totalQuestions) * 100}%`,
                            background: 'linear-gradient(90deg, #DD6B20, #E53E3E)',
                            transition: 'width 0.5s cubic-bezier(0.4, 0, 0.2, 1)'
                        }}
                    />
                </div>
            </div>

            <AnimatePresence mode="wait">
                <motion.div
                    key={currentQuestionIndex}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3 }}
                >
                    {/* Question Card */}
                    <div className="glass-panel" style={{ padding: '2.5rem', marginBottom: '2rem' }}>
                        <div style={{ marginBottom: '1.5rem', display: 'flex', justifyContent: 'space-between' }}>
                            <span style={{
                                color: '#DD6B20',
                                fontSize: '0.85rem',
                                fontWeight: '600',
                                letterSpacing: '1px',
                                textTransform: 'uppercase'
                            }}>
                                Question {currentQuestionIndex + 1} of {totalQuestions}
                            </span>
                        </div>

                        <h2 style={{
                            fontSize: '1.4rem',
                            fontWeight: '500',
                            marginBottom: '2rem',
                            lineHeight: '1.5',
                            color: 'rgba(255,255,255,0.95)'
                        }}>
                            {formatText(question.question)}
                        </h2>

                        {/* Integrated CodeReveal Component */}
                        {question.codeSnippet && (
                            <CodeReveal
                                code={question.codeSnippet}
                                output={question.codeOutput}
                            />
                        )}

                        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
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
                                        style={{
                                            pointerEvents: isAnswered ? 'none' : 'auto',
                                            padding: '1.25rem',
                                            display: 'grid',
                                            gridTemplateColumns: 'auto 1fr auto',
                                            gap: '1rem'
                                        }}
                                    >
                                        <div style={{
                                            width: '24px',
                                            height: '24px',
                                            borderRadius: '6px',
                                            border: '1px solid rgba(255,255,255,0.3)',
                                            color: 'rgba(255,255,255,0.5)',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            fontSize: '0.8rem',
                                            fontWeight: '600'
                                        }}>
                                            {String.fromCharCode(65 + index)}
                                        </div>
                                        <span style={{ fontSize: '1rem', lineHeight: '1.4' }}>{option}</span>
                                        <div style={{ width: '24px' }}>
                                            {statusClass === 'correct' && <CheckCircle size={20} color="#48BB78" />}
                                            {statusClass === 'incorrect' && <XCircle size={20} color="#F56565" />}
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>

                    {/* Explanation - Decent Look */}
                    {isAnswered && (
                        <motion.div
                            initial={{ opacity: 0, scale: 0.98 }}
                            animate={{ opacity: 1, scale: 1 }}
                            style={{
                                padding: '1.5rem',
                                background: 'rgba(221, 107, 32, 0.1)', // Very subtle orange
                                borderLeft: '4px solid #DD6B20',
                                borderRadius: '4px', // Cleaner, less rounded than the card
                                marginBottom: '2rem'
                            }}
                        >
                            <h4 style={{ margin: '0 0 0.5rem 0', color: '#DD6B20', fontSize: '1rem', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                                Explanation
                            </h4>
                            <p style={{ margin: 0, color: 'rgba(255,255,255,0.9)', lineHeight: '1.6' }}>
                                {formatText(question.explanation)}
                            </p>
                        </motion.div>
                    )}

                    <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                        <motion.button
                            className="btn-primary"
                            onClick={handleNext}
                            disabled={!isAnswered}
                            whileHover={{ scale: isAnswered ? 1.02 : 1 }}
                            whileTap={{ scale: isAnswered ? 0.98 : 1 }}
                            style={{
                                opacity: isAnswered ? 1 : 0.5,
                                cursor: isAnswered ? 'pointer' : 'not-allowed',
                                display: 'flex',
                                alignItems: 'center',
                                gap: '8px',
                                padding: '14px 28px',
                                fontSize: '1rem'
                            }}
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
