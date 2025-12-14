import { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import { ChevronLeft } from 'lucide-react';
import { motion } from 'framer-motion';

// Import the raw markdown file. 
// Note: This relies on Vite's ?raw import feature.
import studyGuideContent from '../../# Statistics for CSAI II – Detailed Conc.md?raw';

const StudyGuideScreen = ({ onBack }) => {
    return (
        <div style={{ padding: '2rem', maxWidth: '800px', margin: '0 auto', color: '#e2e8f0' }}>
            <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                style={{ marginBottom: '2rem' }}
            >
                <button
                    onClick={onBack}
                    style={{
                        background: 'transparent',
                        border: 'none',
                        color: '#94a3b8',
                        cursor: 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.5rem',
                        fontSize: '1rem',
                        padding: '0.5rem 0'
                    }}
                >
                    <ChevronLeft size={20} />
                    Back to Selection
                </button>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="study-guide-content"
                style={{
                    background: 'rgba(30, 41, 59, 0.5)',
                    padding: '2rem',
                    borderRadius: '16px',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    lineHeight: '1.6'
                }}
            >
                <ReactMarkdown
                    components={{
                        h1: ({ node, ...props }) => <h1 style={{ color: '#FBD38D', borderBottom: '1px solid #475569', paddingBottom: '0.5rem', marginTop: '2rem' }} {...props} />,
                        h2: ({ node, ...props }) => <h2 style={{ color: '#F6AD55', marginTop: '1.5rem' }} {...props} />,
                        h3: ({ node, ...props }) => <h3 style={{ color: '#90CDF4', marginTop: '1.25rem' }} {...props} />,
                        code: ({ node, inline, className, children, ...props }) => {
                            const match = /language-(\w+)/.exec(className || '')
                            return !inline ? (
                                <div style={{ background: '#0f172a', padding: '1rem', borderRadius: '8px', overflowX: 'auto', margin: '1rem 0' }}>
                                    <code className={className} style={{ fontFamily: 'monospace', color: '#e2e8f0' }} {...props}>
                                        {children}
                                    </code>
                                </div>
                            ) : (
                                <code className={className} style={{ background: 'rgba(255,255,255,0.1)', padding: '0.2rem 0.4rem', borderRadius: '4px', fontFamily: 'monospace' }} {...props}>
                                    {children}
                                </code>
                            )
                        },
                        blockquote: ({ node, ...props }) => <blockquote style={{ borderLeft: '4px solid #4a5568', paddingLeft: '1rem', color: '#94a3b8', fontStyle: 'italic' }} {...props} />,
                        table: ({ node, ...props }) => <div style={{ overflowX: 'auto' }}><table style={{ borderCollapse: 'collapse', width: '100%', margin: '1rem 0' }} {...props} /></div>,
                        th: ({ node, ...props }) => <th style={{ border: '1px solid #475569', padding: '0.5rem', background: '#2d3748' }} {...props} />,
                        td: ({ node, ...props }) => <td style={{ border: '1px solid #475569', padding: '0.5rem' }} {...props} />,
                    }}
                >
                    {studyGuideContent}
                </ReactMarkdown>
            </motion.div>
        </div>
    );
};

export default StudyGuideScreen;
