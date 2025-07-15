'use client';

import { useEffect, useState } from 'react';

const TopNotificationBar = () => {
  // Countdown timer logic (example: 2 days, 23 hours, 5 min, 59 sec)
  const [timeLeft, setTimeLeft] = useState({
    days: 2,
    hours: 23,
    minutes: 5,
    seconds: 59,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft((prev) => {
        let { days, hours, minutes, seconds } = prev;
        if (seconds > 0) seconds--;
        else if (minutes > 0) { minutes--; seconds = 59; }
        else if (hours > 0) { hours--; minutes = 59; seconds = 59; }
        else if (days > 0) { days--; hours = 23; minutes = 59; seconds = 59; }
        return { days, hours, minutes, seconds };
      });
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full bg-white text-gray-800 text-xs sm:text-sm flex flex-col sm:flex-row items-center justify-between px-3 sm:px-4 py-2 font-medium shadow z-50">
      <div className="flex items-center gap-2 mb-1 sm:mb-0">
        <span className="inline-block w-2 h-2 rounded-full bg-yellow-400 animate-pulse"></span>
        <span className="text-yellow-600 font-semibold text-xs sm:text-sm">Only 10 Spots remaining</span>
      </div>
      <div className="flex items-center gap-1 sm:gap-2">
        <span className="font-semibold text-gray-800 text-xs sm:text-sm hidden sm:inline">Limited Time Offer Ends In:</span>
        <span className="font-semibold text-gray-800 text-xs sm:text-sm sm:hidden">Ends In:</span>
        <div className="flex gap-1">
          <span className="bg-red-600 text-white px-1 sm:px-2 py-1 rounded font-bold min-w-[24px] sm:min-w-[32px] text-center text-xs">
            {timeLeft.days.toString().padStart(2, '0')}d
          </span>
          <span className="bg-red-600 text-white px-1 sm:px-2 py-1 rounded font-bold min-w-[24px] sm:min-w-[32px] text-center text-xs">
            {timeLeft.hours.toString().padStart(2, '0')}h
          </span>
          <span className="bg-red-600 text-white px-1 sm:px-2 py-1 rounded font-bold min-w-[24px] sm:min-w-[32px] text-center text-xs">
            {timeLeft.minutes.toString().padStart(2, '0')}m
          </span>
          <span className="bg-red-600 text-white px-1 sm:px-2 py-1 rounded font-bold min-w-[24px] sm:min-w-[32px] text-center text-xs">
            {timeLeft.seconds.toString().padStart(2, '0')}s
          </span>
        </div>
      </div>
    </div>
  );
};

export default TopNotificationBar; 