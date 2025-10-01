import { useState, useEffect } from 'react';
import { cn } from "@/lib/utils";

interface CountdownTimerProps {
  initialHours?: number;
  initialMinutes?: number;
  initialSeconds?: number;
  compact?: boolean;
  className?: string;
}

export const CountdownTimer = ({ 
  initialHours = 1, 
  initialMinutes = 15, 
  initialSeconds = 34,
  compact = false,
  className,
}: CountdownTimerProps) => {
  const [timeLeft, setTimeLeft] = useState({
    hours: initialHours,
    minutes: initialMinutes,
    seconds: initialSeconds,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prevTime) => {
        const { hours, minutes, seconds } = prevTime;
        
        if (seconds > 0) {
          return { ...prevTime, seconds: seconds - 1 };
        } else if (minutes > 0) {
          return { ...prevTime, minutes: minutes - 1, seconds: 59 };
        } else if (hours > 0) {
          return { hours: hours - 1, minutes: 59, seconds: 59 };
        } else {
          // Reset timer when it reaches 0
          return { hours: initialHours, minutes: initialMinutes, seconds: initialSeconds };
        }
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [initialHours, initialMinutes, initialSeconds]);

  if (compact) {
    const totalSeconds = timeLeft.hours * 3600 + timeLeft.minutes * 60 + timeLeft.seconds;
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;
    const formatted = hours > 0
      ? `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`
      : `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;

    return (
      <span className={cn("font-bold", className)}>{formatted}</span>
    );
  }

  return (
    <div className="flex items-center gap-1 text-white font-bold">
      <span className="bg-black px-2 py-1 rounded text-sm">
        {timeLeft.hours.toString().padStart(2, '0')}h
      </span>
      <span className="bg-black px-2 py-1 rounded text-sm">
        {timeLeft.minutes.toString().padStart(2, '0')}min
      </span>
      <span className="bg-black px-2 py-1 rounded text-sm">
        {timeLeft.seconds.toString().padStart(2, '0')}s
      </span>
    </div>
  );
};