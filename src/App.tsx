import { useState, useCallback } from 'react';
import type { BodyPart, Screen, Stretch } from './types';
import { pickRandomStretches } from './data/stretches';
import { useTheme } from './hooks/useTheme';
import { ThemeToggle } from './components/ThemeToggle';
import { Home } from './pages/Home';
import { BodyPartPicker } from './pages/BodyPartPicker';
import { SessionConfig } from './pages/SessionConfig';
import { StretchSession } from './pages/StretchSession';
import { SessionComplete } from './pages/SessionComplete';

export default function App() {
  const { theme, toggleTheme } = useTheme();
  const [screen, setScreen] = useState<Screen>('home');
  const [bodyPart, setBodyPart] = useState<BodyPart>('hips');
  const [exerciseCount, setExerciseCount] = useState(5);
  const [holdSeconds, setHoldSeconds] = useState(60);
  const [sessionStretches, setSessionStretches] = useState<Stretch[]>([]);

  const goHome = useCallback(() => setScreen('home'), []);

  const handleSelectBodyPart = useCallback((bp: BodyPart) => {
    setBodyPart(bp);
    setScreen('config');
  }, []);

  const handleStartSession = useCallback(
    (count: number, duration: number) => {
      setExerciseCount(count);
      setHoldSeconds(duration);
      setSessionStretches(pickRandomStretches(bodyPart, count));
      setScreen('session');
    },
    [bodyPart]
  );

  const handleSessionComplete = useCallback(() => {
    setScreen('complete');
  }, []);

  const handleRestart = useCallback(() => {
    setSessionStretches(pickRandomStretches(bodyPart, exerciseCount));
    setScreen('session');
  }, [bodyPart, exerciseCount]);

  return (
    <div className="relative flex flex-col min-h-full max-w-lg mx-auto w-full">
      <ThemeToggle theme={theme} onToggle={toggleTheme} />

      {screen === 'home' && (
        <Home onStart={() => setScreen('body-part')} />
      )}

      {screen === 'body-part' && (
        <BodyPartPicker onSelect={handleSelectBodyPart} onBack={goHome} />
      )}

      {screen === 'config' && (
        <SessionConfig
          bodyPart={bodyPart}
          onStart={handleStartSession}
          onBack={() => setScreen('body-part')}
        />
      )}

      {screen === 'session' && sessionStretches.length > 0 && (
        <StretchSession
          stretches={sessionStretches}
          holdSeconds={holdSeconds}
          onComplete={handleSessionComplete}
        />
      )}

      {screen === 'complete' && (
        <SessionComplete
          bodyPart={bodyPart}
          exerciseCount={exerciseCount}
          holdSeconds={holdSeconds}
          onRestart={handleRestart}
          onHome={goHome}
        />
      )}
    </div>
  );
}
