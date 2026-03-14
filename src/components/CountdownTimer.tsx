interface Props {
  secondsLeft: number;
  totalSeconds: number;
  size?: number;
}

export function CountdownTimer({ secondsLeft, totalSeconds, size = 200 }: Props) {
  const radius = (size - 16) / 2;
  const circumference = 2 * Math.PI * radius;
  const progress = totalSeconds > 0 ? secondsLeft / totalSeconds : 0;
  const strokeDashoffset = circumference * (1 - progress);

  const minutes = Math.floor(secondsLeft / 60);
  const secs = secondsLeft % 60;
  const display = minutes > 0
    ? `${minutes}:${secs.toString().padStart(2, '0')}`
    : `${secs}`;

  const isUrgent = secondsLeft <= 3 && secondsLeft > 0;

  return (
    <div className="relative flex items-center justify-center" style={{ width: size, height: size }}>
      <svg width={size} height={size} className="-rotate-90">
        {/* Background ring */}
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          className="stroke-slate-200 dark:stroke-slate-700"
          strokeWidth={8}
        />
        {/* Progress ring */}
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          className={isUrgent ? 'stroke-red-500' : 'stroke-primary-500'}
          strokeWidth={8}
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
          style={{ transition: 'stroke-dashoffset 0.3s ease' }}
        />
      </svg>
      <span
        className={`absolute text-5xl font-bold tabular-nums ${
          isUrgent ? 'text-red-500 animate-pulse' : 'text-slate-800 dark:text-slate-100'
        }`}
      >
        {display}
      </span>
    </div>
  );
}
