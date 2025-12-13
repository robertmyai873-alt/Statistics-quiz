import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, ChevronDown, ChevronUp } from 'lucide-react';

const CodeReveal = ({ code = "", output = "" }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div style={{
            margin: '1.5rem 0',
            borderRadius: '12px',
            overflow: 'hidden',
            border: '1px solid #e2e8f0',
            boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
            background: '#1e293b', // Dark slate background for terminal feel
            color: '#e2e8f0'
        }}>
            {/* Code Section */}
            <div style={{
                padding: '1.5rem',
                backgroundColor: '#1e293b',
                fontFamily: 'Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace',
                fontSize: '0.9rem',
                lineHeight: '1.6',
                overflowX: 'auto'
            }}>
                <pre style={{ margin: 0 }}>
                    <code>{code}</code>
                </pre>
            </div>

            {/* Controls */}
            <div style={{
                padding: '0.75rem 1.5rem',
                backgroundColor: '#0f172a', // Darker shade for control bar
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                borderTop: '1px solid #334155'
            }}>
                <span style={{ fontSize: '0.8rem', color: '#94a3b8', fontWeight: 600 }}>
                    R CONSOLE
                </span>

                <button
                    onClick={() => setIsOpen(!isOpen)}
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '8px',
                        padding: '6px 16px',
                        borderRadius: '6px',
                        border: 'none',
                        background: isOpen ? '#475569' : '#22c55e', // Green for run, Grey for toggle
                        color: 'white',
                        fontSize: '0.85rem',
                        fontWeight: '600',
                        cursor: 'pointer',
                        transition: 'all 0.2s'
                    }}
                >
                    {isOpen ? (
                        <>
                            <ChevronUp size={16} /> Hide Output
                        </>
                    ) : (
                        <>
                            <Play size={16} fill="white" /> Run Output
                        </>
                    )}
                </button>
            </div>

            {/* Output Section (Collapsible) */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: 'easeInOut' }}
                        style={{ overflow: 'hidden' }}
                    >
                        <div style={{
                            padding: '1.5rem',
                            backgroundColor: '#0f172a',
                            borderTop: '1px solid #334155',
                            fontFamily: 'Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace',
                            fontSize: '0.9rem',
                            color: '#4ade80', // Matrix green for output
                            whiteSpace: 'pre-wrap'
                        }}>
                            {output}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default CodeReveal;
