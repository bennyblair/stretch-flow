import type { BodyPart } from '../types';
import { bodyPartLabels, bodyPartEmojis } from '../data/stretches';

interface Props {
  bodyPart: BodyPart;
  exerciseCount: number;
  holdSeconds: number;
  onRestart: () => void;
  onHome: () => void;
}

export function SessionComplete({ bodyPart, exerciseCount, holdSeconds, onRestart, onHome }: Props) {
  const totalTime = exerciseCount * holdSeconds;
  const totalMin = Math.floor(totalTime / 60);
  const totalSec = totalTime % 60;

  return (
    <div className="flex-1 flex flex-col items-center justify-center gap-8 px-6">
      {/* Celebration */}
      <span className="text-8xl">🎉</span>

      <div className="text-center">
        <h1 className="text-3xl font-bold text-slate-800 dark:text-white mb-2">
          Session Complete!
        </h1>
        <p className="text-lg text-slate-500 dark:text-slate-400">
          Great work stretching!
        </p>
      </div>

      {/* Summary card */}
      <div className="w-full max-w-sm p-6 rounded-2xl bg-slate-100 dark:bg-slate-800">
        <div className="flex items-center justify-center gap-2 mb-4">
          <span className="text-2xl">{bodyPartEmojis[bodyPart]}</span>
          <span className="text-lg font-semibold text-slate-700 dark:text-slate-200">
            {bodyPartLabels[bodyPart]}
          </span>
        </div>
        <div className="grid grid-cols-3 gap-4 text-center">
          <div>
            <p className="text-2xl font-bold text-primary-500">{exerciseCount}</p>
            <p className="text-xs text-slate-500 dark:text-slate-400">Stretches</p>
          </div>
          <div>
            <p className="text-2xl font-bold text-primary-500">{holdSeconds}s</p>
            <p className="text-xs text-slate-500 dark:text-slate-400">Per hold</p>
          </div>
          <div>
            <p className="text-2xl font-bold text-primary-500">
              {totalMin > 0 ? `${totalMin}m` : ''}{totalSec > 0 ? `${totalSec}s` : ''}
            </p>
            <p className="text-xs text-slate-500 dark:text-slate-400">Total</p>
          </div>
        </div>
      </div>

      {/* Actions */}
      <div className="flex flex-col gap-3 w-full max-w-sm">
        <button
          onClick={onRestart}
          className="w-full py-4 bg-primary-500 hover:bg-primary-600 active:scale-95 text-white font-semibold text-lg rounded-2xl shadow-lg transition-all"
        >
          Stretch Again
        </button>
        <button
          onClick={onHome}
          className="w-full py-3 rounded-xl font-semibold text-base border-2 border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 active:scale-95 transition-all"
        >
          Back to Home
        </button>
      </div>
    </div>
  );
}
