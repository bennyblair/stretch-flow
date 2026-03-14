import type { Stretch } from '../types';
import { StretchIllustration } from './StretchIllustration';

interface Props {
  stretch: Stretch;
  currentIndex: number;
  totalCount: number;
}

export function StretchCard({ stretch, currentIndex, totalCount }: Props) {
  return (
    <div className="flex flex-col items-center gap-4 px-4">
      {/* Progress */}
      <p className="text-sm text-slate-500 dark:text-slate-400 font-medium">
        {currentIndex + 1} of {totalCount}
      </p>

      {/* Stretch illustration */}
      <StretchIllustration stretchId={stretch.id} />

      {/* Stretch name */}
      <h2 className="text-2xl font-bold text-slate-800 dark:text-white text-center">
        {stretch.name}
      </h2>

      {/* Instructions */}
      <p className="text-base text-slate-600 dark:text-slate-300 text-center max-w-sm leading-relaxed">
        {stretch.instructions}
      </p>
    </div>
  );
}
