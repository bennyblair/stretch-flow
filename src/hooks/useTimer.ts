import { useState, useRef, useCallback, useEffect } from 'react';

interface UseTimerReturn {
  secondsLeft: number;
  isRunning: boolean;
  isPaused: boolean;
  start: (duration: number) => void;
  pause: () => void;
  resume: () => void;
  reset: () => void;
}

export function useTimer(onComplete: () => void): UseTimerReturn {
  const [secondsLeft, setSecondsLeft] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const onCompleteRef = useRef(onComplete);

  onCompleteRef.current = onComplete;

  const clearTimer = useCallback(() => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  }, []);

  const start = useCallback((duration: number) => {
    clearTimer();
    setSecondsLeft(duration);
    setIsRunning(true);
    setIsPaused(false);

    intervalRef.current = setInterval(() => {
      setSecondsLeft((prev) => {
        if (prev <= 1) {
          clearTimer();
          setIsRunning(false);
          setIsPaused(false);
          // Defer callback to avoid state update during render
          setTimeout(() => onCompleteRef.current(), 0);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
  }, [clearTimer]);

  const pause = useCallback(() => {
    if (isRunning && !isPaused) {
      clearTimer();
      setIsPaused(true);
    }
  }, [isRunning, isPaused, clearTimer]);

  const resume = useCallback(() => {
    if (isRunning && isPaused) {
      setIsPaused(false);
      intervalRef.current = setInterval(() => {
        setSecondsLeft((prev) => {
          if (prev <= 1) {
            clearTimer();
            setIsRunning(false);
            setIsPaused(false);
            setTimeout(() => onCompleteRef.current(), 0);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }
  }, [isRunning, isPaused, clearTimer]);

  const reset = useCallback(() => {
    clearTimer();
    setSecondsLeft(0);
    setIsRunning(false);
    setIsPaused(false);
  }, [clearTimer]);

  useEffect(() => {
    return () => clearTimer();
  }, [clearTimer]);

  return { secondsLeft, isRunning, isPaused, start, pause, resume, reset };
}
