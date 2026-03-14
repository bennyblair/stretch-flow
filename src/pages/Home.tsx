interface Props {
  onStart: () => void;
}

export function Home({ onStart }: Props) {
  return (
    <div className="flex-1 flex flex-col items-center justify-center gap-8 px-6">
      {/* Logo / branding */}
      <div className="flex flex-col items-center gap-3">
        <span className="text-7xl">🧘</span>
        <h1 className="text-4xl font-bold tracking-tight text-slate-800 dark:text-white">
          StretchFlow
        </h1>
        <p className="text-lg text-slate-500 dark:text-slate-400 text-center max-w-xs">
          Guided lower body stretching with timed holds
        </p>
      </div>

      {/* Start button */}
      <button
        onClick={onStart}
        className="px-8 py-4 bg-primary-500 hover:bg-primary-600 active:scale-95 text-white font-semibold text-lg rounded-2xl shadow-lg transition-all"
      >
        Start Session
      </button>
    </div>
  );
}
