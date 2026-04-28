import React, { useEffect, useState } from "react";
import './countdown.css'
const CountdownTimer = () => {
  const targetDate = new Date("May 15, 2026 15:37:25").getTime();

  const calculateTimeLeft = () => {
    const now = new Date().getTime();
    const distance = targetDate - now;

    if (distance < 0) {
      return null;
    }

    return {
      days: Math.floor(distance / (1000 * 60 * 60 * 24)),
      hours: Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      ),
      minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
      seconds: Math.floor((distance % (1000 * 60)) / 1000),
    };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div id="demo" className="countdownCont">
      {timeLeft ? (
       <>
       <div className="timeFlex">
            <h1>
                {timeLeft.days}
            </h1>
            <h5>
                days
            </h5>
        </div>
        <div className="timeFlex">
            <h1>
                {timeLeft.hours}
            </h1>
            <h5>
                Hours
            </h5>
        </div>
        <div className="timeFlex">
            <h1>
                {timeLeft.minutes}
            </h1>
            <h5>
                Minutes
            </h5>
        </div>
        <div className="timeFlex">
            <h1>
                {timeLeft.seconds}
            </h1>
            <h5>
                Seconds
            </h5>
        </div>
       </>
            
      ) : (
        "EXPIRED"
      )}
    </div>
  );
};

export default CountdownTimer;