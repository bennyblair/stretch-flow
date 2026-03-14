import { useState, useEffect, useCallback } from 'react';
import type { Stretch } from '../types';
import { CountdownTimer } from '../components/CountdownTimer';
import { StretchCard } from '../components/StretchCard';
import { useTimer } from '../hooks/useTimer';
import { useAudio } from '../hooks/useAudio';

interface Props {
  stretches: Stretch[];
  holdSeconds: number;
  onComplete: () => void;
}

export function StretchSession({ stretches, holdSeconds, onComplete }: Props) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [transitioning, setTransitioning] = useState(false);
  const { playCountdownBeep, playCompleteChime } = useAudio();

  const advance = useCallback(() => {
    playCompleteChime();
    if (currentIndex >= stretches.length - 1) {
      onComplete();
      return;
    }
    setTransitioning(true);
    setTimeout(() => {
      setCurrentIndex((i) => i + 1);
      setTransitioning(false);
    }, 400);
  }, [currentIndex, stretches.length, onComplete, playCompleteChime]);

  const { secondsLeft, isRunning, isPaused, start, pause, resume } = useTimer(advance);

  // Start timer when stretch changes
  useEffect(() => {
    start(holdSeconds);
  }, [currentIndex, holdSeconds, start]);

  // Audio countdown beeps at 3, 2, 1
  useEffect(() => {
    if (secondsLeft > 0 && secondsLeft <= 3 && isRunning && !isPaused) {
      playCountdownBeep();
    }
  }, [secondsLeft, isRunning, isPaused, playCountdownBeep]);

  const handleSkip = () => {
    advance();
  };

  const currentStretch = stretches[currentIndex];

  return (
    <div className="flex-1 flex flex-col items-center justify-between py-8 px-6">
      {/* Stretch card */}
      <div
        className={`flex-1 flex flex-col items-center justify-center transition-all duration-300 ${
          transitioning ? 'opacity-0 translate-x-8' : 'opacity-100 translate-x-0'
        }`}
      >
        <StretchCard
          stretch={currentStretch}
          currentIndex={currentIndex}
          totalCount={stretches.length}
        />
      </div>

      {/* Timer */}
      <div className="my-6">
        <CountdownTimer
          secondsLeft={secondsLeft}
          totalSeconds={holdSeconds}
          size={180}
        />
      </div>

      {/* Controls */}
      <div className="flex items-center gap-4 w-full max-w-sm">
        {/* Pause / Resume */}
        <button
          onClick={isPaused ? resume : pause}
          disabled={!isRunning}
          className="flex-1 py-3 rounded-xl font-semibold text-base border-2 border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 active:scale-95 transition-all disabled:opacity-30"
        >
          {isPaused ? '▶ Resume' : '⏸ Pause'}
        </button>

        {/* Skip */}
        <button
          onClick={handleSkip}
          className="flex-1 py-3 rounded-xl font-semibold text-base bg-slate-700 dark:bg-slate-600 text-white hover:bg-slate-600 dark:hover:bg-slate-500 active:scale-95 transition-all"
        >
          Skip ⏭
        </button>
      </div>

      {/* Progress bar */}
      <div className="w-full max-w-sm mt-4">
        <div className="h-1.5 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
          <div
            className="h-full bg-primary-500 rounded-full transition-all duration-300"
            style={{ width: `${((currentIndex + 1) / stretches.length) * 100}%` }}
          />
        </div>
      </div>
    </div>
  );
}
