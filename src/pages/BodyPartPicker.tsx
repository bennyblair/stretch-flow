import type { BodyPart } from '../types';
import { bodyPartLabels, bodyPartEmojis, getStretchesForBodyPart } from '../data/stretches';

interface Props {
  onSelect: (bodyPart: BodyPart) => void;
  onBack: () => void;
}

const bodyParts: BodyPart[] = [
  'hips',
  'hamstrings',
  'quads',
  'glutes',
  'calves',
  'lower-back',
  'groin',
];

export function BodyPartPicker({ onSelect, onBack }: Props) {
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
        <h1 className="text-2xl font-bold text-slate-800 dark:text-white">
          Choose Body Part
        </h1>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-2 gap-3">
        {bodyParts.map((bp) => (
          <button
            key={bp}
            onClick={() => onSelect(bp)}
            className="flex flex-col items-center gap-2 p-5 rounded-2xl bg-slate-100 dark:bg-slate-800 hover:bg-primary-500/10 dark:hover:bg-primary-500/20 hover:ring-2 hover:ring-primary-500 active:scale-95 transition-all"
          >
            <span className="text-4xl">{bodyPartEmojis[bp]}</span>
            <span className="text-sm font-semibold text-slate-700 dark:text-slate-200">
              {bodyPartLabels[bp]}
            </span>
            <span className="text-xs text-slate-400">
              {getStretchesForBodyPart(bp).length} stretches
            </span>
          </button>
        ))}
      </div>
    </div>
  );
}
