import { useState } from 'react';
import type { BodyPart } from '../types';
import { bodyPartLabels, bodyPartEmojis, getStretchesForBodyPart } from '../data/stretches';

interface Props {
  bodyPart: BodyPart;
  onNext: (exerciseCount: number, holdSeconds: number) => void;
  onBack: () => void;
}

export function SessionConfig({ bodyPart, onNext, onBack }: Props) {
  const maxAvailable = getStretchesForBodyPart(bodyPart).length;
  const maxExercises = Math.min(10, maxAvailable);

  const [count, setCount] = useState(5);
  const [duration, setDuration] = useState(60);
  const [durationError, setDurationError] = useState('');

  const handleDurationChange = (value: string) => {
    const num = parseInt(value, 10);
    if (isNaN(num)) {
      setDuration(0);
      setDurationError('Enter a number');
      return;
    }
    setDuration(num);
    if (num < 30) setDurationError('Minimum 30 seconds');
    else if (num > 120) setDurationError('Maximum 120 seconds');
    else setDurationError('');
  };

  const isValid = duration >= 30 && duration <= 120 && count >= 5 && count <= maxExercises;

  const totalTime = count * duration;
  const totalMin = Math.floor(totalTime / 60);
  const totalSec = totalTime % 60;

  return (
    <div className="flex-1 flex flex-col px-6 py-8">
      {/* Header */}
      <div className="flex items-center gap-3 mb-8">
        <button
          onClick={onBack}
          className="p-2 rounded-full hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
          aria-label="Go back"
        >
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <div>
          <h1 className="text-2xl font-bold text-slate-800 dark:text-white">
            Configure Session
          </h1>
          <p className="text-sm text-slate-500 dark:text-slate-400 flex items-center gap-1">
            <span>{bodyPartEmojis[bodyPart]}</span>
            {bodyPartLabels[bodyPart]}
          </p>
        </div>
      </div>

      <div className="flex flex-col gap-8">
        {/* Exercise count */}
        <div>
          <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-3">
            Number of Exercises
          </label>
          <div className="flex items-center justify-center gap-4">
            <button
              onClick={() => setCount((c) => Math.max(5, c - 1))}
              disabled={count <= 5}
              className="w-12 h-12 rounded-full bg-slate-200 dark:bg-slate-700 text-xl font-bold disabled:opacity-30 hover:bg-slate-300 dark:hover:bg-slate-600 transition-colors"
            >
              −
            </button>
            <span className="text-4xl font-bold w-16 text-center tabular-nums text-slate-800 dark:text-white">
              {count}
            </span>
            <button
              onClick={() => setCount((c) => Math.min(maxExercises, c + 1))}
              disabled={count >= maxExercises}
              className="w-12 h-12 rounded-full bg-slate-200 dark:bg-slate-700 text-xl font-bold disabled:opacity-30 hover:bg-slate-300 dark:hover:bg-slate-600 transition-colors"
            >
              +
            </button>
          </div>
        </div>

        {/* Hold duration */}
        <div>
          <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-3">
            Hold Duration (seconds)
          </label>
          <input
            type="number"
            inputMode="numeric"
            min={30}
            max={120}
            value={duration || ''}
            onChange={(e) => handleDurationChange(e.target.value)}
            className={`w-full px-4 py-3 text-2xl font-bold text-center rounded-xl border-2 bg-white dark:bg-slate-800 transition-colors outline-none ${
              durationError
                ? 'border-red-400 focus:border-red-500'
                : 'border-slate-200 dark:border-slate-600 focus:border-primary-500'
            }`}
          />
          {durationError && (
            <p className="text-sm text-red-400 mt-1">{durationError}</p>
          )}
          <p className="text-xs text-slate-400 mt-1">Between 30 and 120 seconds</p>
        </div>

        {/* Session summary */}
        <div className="p-4 rounded-xl bg-slate-100 dark:bg-slate-800 text-center">
          <p className="text-sm text-slate-500 dark:text-slate-400">Total session time</p>
          <p className="text-2xl font-bold text-slate-800 dark:text-white">
            {totalMin > 0 ? `${totalMin}m ` : ''}{totalSec > 0 ? `${totalSec}s` : totalMin > 0 ? '' : '0s'}
          </p>
        </div>
      </div>

      {/* Start button */}
      <div className="mt-auto pt-8">
        <button
          onClick={() => onNext(count, duration)}
          disabled={!isValid}
          className="w-full py-4 bg-primary-500 hover:bg-primary-600 active:scale-95 disabled:opacity-40 disabled:pointer-events-none text-white font-semibold text-lg rounded-2xl shadow-lg transition-all"
        >
          Preview Exercises →
        </button>
      </div>
    </div>
  );
}
