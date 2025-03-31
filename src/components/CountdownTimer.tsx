
import React, { useState, useEffect } from 'react';

interface TimeLeft {
  hours: number;
  minutes: number;
  seconds: number;
}

const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({ hours: 0, minutes: 0, seconds: 0 });
  const [isHappyHour, setIsHappyHour] = useState(false);

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date();
      const currentHour = now.getHours();
      const currentMinute = now.getMinutes();
      const currentSecond = now.getSeconds();
      
      // Check if current time is during happy hours (4 PM - 7 PM)
      if (currentHour >= 16 && currentHour < 19) {
        setIsHappyHour(true);
        
        // Calculate time left until end of happy hour
        const endHour = 19; // 7 PM
        const hoursLeft = endHour - currentHour - 1;
        const minutesLeft = 59 - currentMinute;
        const secondsLeft = 59 - currentSecond;
        
        return { hours: hoursLeft, minutes: minutesLeft, seconds: secondsLeft };
      } else {
        setIsHappyHour(false);
        
        // Calculate time left until next happy hour
        let targetHour = 16; // 4 PM
        let daysToAdd = 0;
        
        // If it's past 7 PM, next happy hour is tomorrow
        if (currentHour >= 19) {
          daysToAdd = 1;
        }
        
        const targetDate = new Date();
        targetDate.setDate(targetDate.getDate() + daysToAdd);
        targetDate.setHours(targetHour, 0, 0, 0);
        
        const timeDiff = targetDate.getTime() - now.getTime();
        
        const hoursLeft = Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutesLeft = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
        const secondsLeft = Math.floor((timeDiff % (1000 * 60)) / 1000);
        
        return { hours: hoursLeft, minutes: minutesLeft, seconds: secondsLeft };
      }
    };

    // Initial calculation
    setTimeLeft(calculateTimeLeft());

    // Update the countdown every second
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="fixed bottom-8 right-8 z-50 bg-dark bg-opacity-95 backdrop-blur-sm border border-gold border-opacity-40 rounded-lg overflow-hidden shadow-lg animate-glow">
      <div className="px-6 py-4">
        <h4 className="font-playfair text-center text-lg font-semibold mb-2 text-white">
          {isHappyHour ? (
            <>Happy Hour <span className="text-gold">in Progress!</span></>
          ) : (
            <>Next Happy Hour <span className="text-gold">in</span></>
          )}
        </h4>
        
        <div className="flex justify-center items-center space-x-4">
          <div className="flex flex-col items-center">
            <span className="text-2xl font-bold text-white">{timeLeft.hours}</span>
            <span className="text-xs text-gray-400">Hours</span>
          </div>
          <div className="text-gold text-2xl font-bold">:</div>
          <div className="flex flex-col items-center">
            <span className="text-2xl font-bold text-white">{timeLeft.minutes}</span>
            <span className="text-xs text-gray-400">Minutes</span>
          </div>
          <div className="text-gold text-2xl font-bold">:</div>
          <div className="flex flex-col items-center">
            <span className="text-2xl font-bold text-white">{timeLeft.seconds}</span>
            <span className="text-xs text-gray-400">Seconds</span>
          </div>
        </div>
        
        <div className="mt-3 text-center">
          {isHappyHour ? (
            <p className="text-gold text-sm animate-pulse">
              Hurry! Enjoy our special offers now!
            </p>
          ) : (
            <a href="#reserve" className="text-gold text-sm hover:text-white transition-colors">
              Reserve your spot now →
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default CountdownTimer;
