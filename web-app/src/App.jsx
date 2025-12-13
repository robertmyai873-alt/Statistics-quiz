
import { useState } from 'react';
import ModuleSelectionScreen from './components/ModuleSelectionScreen';
import QuizScreen from './components/QuizScreen';
import ResultScreen from './components/ResultScreen';
import { AnimatePresence } from 'framer-motion';

function App() {
  const [gameState, setGameState] = useState('selection'); // welcome (removed), selection, playing, results
  const [score, setScore] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [activeQuestions, setActiveQuestions] = useState([]);
  const [activeModule, setActiveModule] = useState(null);

  // Initialize stats from localStorage
  const [userStats, setUserStats] = useState(() => {
    const saved = localStorage.getItem('ml_quiz_stats');
    return saved ? JSON.parse(saved) : { totalScore: 0, modulesCompleted: 0, completedModuleNames: [] };
  });

  const startQuiz = () => {
    setGameState('selection');
  };

  const handleModuleSelect = (questions, moduleName) => {
    setActiveQuestions(questions);
    setActiveModule(moduleName);
    setScore(0);
    setAnswers([]);
    setGameState('playing');
  };

  const finishQuiz = (finalScore, finalAnswers) => {
    setScore(finalScore);
    setAnswers(finalAnswers);

    // Update Stats
    const newStats = { ...userStats };
    newStats.totalScore += finalScore;

    // Only mark module as completed if it hasn't been done before
    if (activeModule && !newStats.completedModuleNames.includes(activeModule)) {
      newStats.completedModuleNames.push(activeModule);
      newStats.modulesCompleted += 1;
    }

    setUserStats(newStats);
    localStorage.setItem('ml_quiz_stats', JSON.stringify(newStats));

    setGameState('results');
  };

  const restartQuiz = () => {
    setGameState('selection');
  };

  return (
    <div className="app-container" style={{ width: '100%', maxWidth: '900px', margin: '0 auto' }}>
      <AnimatePresence mode="wait">
        {gameState === 'selection' && (
          <ModuleSelectionScreen
            key="selection"
            onSelect={handleModuleSelect}
            onBack={() => { }} // No back button needed on main screen or maybe leave empty
            userStats={userStats}
          />
        )}
        {gameState === 'playing' && (
          <QuizScreen
            key="quiz"
            questions={activeQuestions}
            onFinish={finishQuiz}
            onBack={() => setGameState('selection')}
          />
        )}
        {gameState === 'results' && (
          <ResultScreen
            key="results"
            score={score}
            totalQuestions={answers.length}
            answers={answers}
            onRestart={restartQuiz}
          />
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;
