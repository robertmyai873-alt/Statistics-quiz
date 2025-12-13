import { motion } from 'framer-motion';
import questionsData from '../data/questions.json';
import { BookOpen, Brain, Calculator, ChevronRight } from 'lucide-react';

const ModuleSelectionScreen = ({ onSelect, userStats }) => {
    // Group questions by module
    const modules = {};
    const uncategorized = [];

    questionsData.forEach(q => {
        if (q.module) {
            if (!modules[q.module]) {
                modules[q.module] = [];
            }
            modules[q.module].push(q);
        } else {
            uncategorized.push(q);
        }
    });

    // Create module list including uncategorized if any
    const moduleList = Object.keys(modules).sort().map(name => ({
        name,
        questions: modules[name],
        icon: <BookOpen size={24} />,
        description: `${modules[name].length} Questions`
    }));

    if (uncategorized.length > 0) {
        moduleList.push({
            name: "General Practice",
            questions: uncategorized,
            icon: <Brain size={24} />,
            description: `${uncategorized.length} Questions`
        });
    }

    // Determine completion status
    const getStatus = (moduleName) => {
        return userStats?.completedModuleNames?.includes(moduleName) ? 'completed' : 'pending';
    };

    return (
        <div style={{ padding: '2rem' }}>
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                style={{ textAlign: 'center', marginBottom: '3rem' }}
            >
                <h1 style={{ fontSize: '2.5rem', marginBottom: '0.5rem', background: 'linear-gradient(135deg, #DD6B20 0%, #E53E3E 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                    Statistics Quiz
                </h1>
                <p style={{ color: '#64748b' }}>Select a module to begin your practice</p>
            </motion.div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem' }}>
                {moduleList.map((module, index) => (
                    <motion.div
                        key={module.name}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                        whileHover={{ scale: 1.02, translateY: -5 }}
                        className="glass-panel"
                        onClick={() => onSelect(module.questions, module.name)}
                        style={{
                            cursor: 'pointer',
                            padding: '1.5rem',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                            border: '1px solid rgba(255,255,255,0.1)',
                            background: 'rgba(255,255,255,0.05)'
                        }}
                    >
                        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                            <div style={{
                                padding: '12px',
                                borderRadius: '12px',
                                background: 'linear-gradient(135deg, #FBD38D 0%, #F6AD55 100%)',
                                color: '#744210'
                            }}>
                                {module.icon}
                            </div>
                            <div style={{ textAlign: 'left' }}>
                                <h3 style={{ margin: 0, fontSize: '1.1rem', marginBottom: '4px' }}>{module.name}</h3>
                                <div style={{ display: 'flex', gap: '8px', fontSize: '0.85rem', color: '#94a3b8' }}>
                                    <span>{module.description}</span>
                                    {getStatus(module.name) === 'completed' && (
                                        <span style={{ color: '#48BB78' }}>✓ Completed</span>
                                    )}
                                </div>
                            </div>
                        </div>
                        <ChevronRight color="#cbd5e1" />
                    </motion.div>
                ))}
            </div>

            <div style={{ marginTop: '3rem', textAlign: 'center', color: '#64748b', fontSize: '0.9rem' }}>
                <p>Completed Modules: {userStats?.modulesCompleted || 0}</p>
            </div>
        </div>
    );
};

export default ModuleSelectionScreen;
