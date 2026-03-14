import { useState } from 'react';
import type { BodyPart, Stretch } from '../types';
import { getStretchesForBodyPart, bodyPartLabels, bodyPartEmojis } from '../data/stretches';

interface Props {
  stretches: Stretch[];
  bodyPart: BodyPart;
  holdSeconds: number;
  onConfirm: (stretches: Stretch[]) => void;
  onBack: () => void;
}

export function SessionPreview({ stretches: initial, bodyPart, holdSeconds, onConfirm, onBack }: Props) {
  const [selected, setSelected] = useState<Stretch[]>(initial);

  const all = getStretchesForBodyPart(bodyPart);
  const bank = all.filter((s) => !selected.find((sel) => sel.id === s.id));

  const moveUp = (i: number) => {
    if (i === 0) return;
    const next = [...selected];
    [next[i - 1], next[i]] = [next[i], next[i - 1]];
    setSelected(next);
  };

  const moveDown = (i: number) => {
    if (i === selected.length - 1) return;
    const next = [...selected];
    [next[i], next[i + 1]] = [next[i + 1], next[i]];
    setSelected(next);
  };

  const remove = (i: number) => {
    if (selected.length <= 1) return;
    setSelected(selected.filter((_, idx) => idx !== i));
  };

  const add = (stretch: Stretch) => {
    if (selected.length >= 10) return;
    setSelected([...selected, stretch]);
  };

  const totalTime = selected.length * holdSeconds;
  const totalMin = Math.floor(totalTime / 60);
  const totalSec = totalTime % 60;

  return (
    <div className="flex-1 flex flex-col px-6 py-8">
      {/* Header */}
      <div className="flex items-center gap-3 mb-6">
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
          <h1 className="text-2xl font-bold text-slate-800 dark:text-white">Preview Session</h1>
          <p className="text-sm text-slate-500 dark:text-slate-400 flex items-center gap-1">
            <span>{bodyPartEmojis[bodyPart]}</span>
            {bodyPartLabels[bodyPart]} &middot; {selected.length} exercises &middot;{' '}
            {totalMin > 0 ? `${totalMin}m ` : ''}{totalSec > 0 ? `${totalSec}s` : totalMin > 0 ? '' : '0s'}
          </p>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto flex flex-col gap-6 pb-4">
        {/* Selected stretches */}
        <div className="flex flex-col gap-2">
          {selected.map((stretch, i) => (
            <div
              key={stretch.id}
              className="flex items-center gap-3 p-3 rounded-xl bg-white dark:bg-slate-800 shadow-sm border border-slate-100 dark:border-slate-700"
            >
              {/* Index */}
              <span className="text-xs font-bold text-slate-400 w-5 text-center flex-shrink-0">{i + 1}</span>

              {/* Image */}
              <div className="w-14 h-14 rounded-lg overflow-hidden bg-slate-200 dark:bg-slate-700 flex-shrink-0">
                <img
                  src={stretch.imageUrl}
                  alt={stretch.name}
                  className="w-full h-full object-cover"
                  onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }}
                />
              </div>

              {/* Name */}
              <span className="flex-1 text-sm font-medium text-slate-800 dark:text-white leading-tight">
                {stretch.name}
              </span>

              {/* Up / Down */}
              <div className="flex flex-col gap-1">
                <button
                  onClick={() => moveUp(i)}
                  disabled={i === 0}
                  className="w-7 h-7 rounded-md bg-slate-100 dark:bg-slate-700 disabled:opacity-20 hover:bg-slate-200 dark:hover:bg-slate-600 flex items-center justify-center transition-colors"
                  aria-label="Move up"
                >
                  <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
                  </svg>
                </button>
                <button
                  onClick={() => moveDown(i)}
                  disabled={i === selected.length - 1}
                  className="w-7 h-7 rounded-md bg-slate-100 dark:bg-slate-700 disabled:opacity-20 hover:bg-slate-200 dark:hover:bg-slate-600 flex items-center justify-center transition-colors"
                  aria-label="Move down"
                >
                  <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
              </div>

              {/* Remove */}
              <button
                onClick={() => remove(i)}
                disabled={selected.length <= 1}
                className="w-7 h-7 rounded-md text-red-400 hover:bg-red-50 dark:hover:bg-red-900/30 disabled:opacity-20 flex items-center justify-center transition-colors"
                aria-label="Remove"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          ))}
        </div>

        {/* Bank */}
        {bank.length > 0 && (
          <div>
            <h2 className="text-sm font-semibold text-slate-500 dark:text-slate-400 mb-3 uppercase tracking-wide">
              Add from bank{' '}
              {selected.length >= 10 && (
                <span className="normal-case font-normal">(max 10 reached)</span>
              )}
            </h2>
            <div className="grid grid-cols-2 gap-2">
              {bank.map((stretch) => (
                <button
                  key={stretch.id}
                  onClick={() => add(stretch)}
                  disabled={selected.length >= 10}
                  className="flex items-center gap-2 p-2 rounded-xl bg-white dark:bg-slate-800 border border-dashed border-slate-200 dark:border-slate-600 hover:border-primary-400 hover:bg-primary-50 dark:hover:bg-primary-900/20 disabled:opacity-40 disabled:pointer-events-none transition-colors text-left"
                >
                  <div className="w-10 h-10 rounded-lg overflow-hidden bg-slate-200 dark:bg-slate-700 flex-shrink-0">
                    <img
                      src={stretch.imageUrl}
                      alt={stretch.name}
                      className="w-full h-full object-cover"
                      onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }}
                    />
                  </div>
                  <span className="flex-1 text-xs font-medium text-slate-700 dark:text-slate-300 leading-tight line-clamp-2">
                    {stretch.name}
                  </span>
                  <svg className="w-4 h-4 text-primary-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
                  </svg>
                </button>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Start button */}
      <div className="pt-4">
        <button
          onClick={() => onConfirm(selected)}
          className="w-full py-4 bg-primary-500 hover:bg-primary-600 active:scale-95 text-white font-semibold text-lg rounded-2xl shadow-lg transition-all"
        >
          Start Session
        </button>
      </div>
    </div>
  );
}
