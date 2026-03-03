
import React, { useState, useEffect } from 'react';
import LandingPage from './screens/LandingPage';
import Dashboard from './screens/Dashboard';
import TournamentPage from './screens/TournamentPage';
import EditorPage from './screens/EditorPage';
import { Screen } from './types';

const App: React.FC = () => {
  const [currentScreen, setCurrentScreen] = useState<Screen>('landing');
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  const toggleTheme = () => setIsDark(!isDark);

  const renderScreen = () => {
    switch (currentScreen) {
      case 'landing':
        return <LandingPage onNavigate={setCurrentScreen} toggleTheme={toggleTheme} isDark={isDark} />;
      case 'dashboard':
        return <Dashboard onNavigate={setCurrentScreen} toggleTheme={toggleTheme} isDark={isDark} />;
      case 'tournament':
        return <TournamentPage onNavigate={setCurrentScreen} toggleTheme={toggleTheme} isDark={isDark} />;
      case 'editor':
        return <EditorPage onNavigate={setCurrentScreen} toggleTheme={toggleTheme} isDark={isDark} />;
      default:
        return <LandingPage onNavigate={setCurrentScreen} toggleTheme={toggleTheme} isDark={isDark} />;
    }
  };

  return (
    <div className="min-h-screen selection:bg-neon selection:text-black">
      {renderScreen()}
    </div>
  );
};

export default App;
