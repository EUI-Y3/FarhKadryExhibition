import React, { useEffect, useState } from "react";
import "./countdown.css";
import { supabase } from "./../supabase"

const CountdownTimer = () => {
  const [targetDate, setTargetDate] = useState(null);
  const [timeLeft, setTimeLeft] = useState(null);

  const calculateTimeLeft = (target) => {
    const now = new Date().getTime();
    const distance = target - now;

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

  useEffect(() => {
    const fetchExhibitionTime = async () => {
      const { data, error } = await supabase
        .from("exhibitionTime")
        .select("time")
        .single();

      if (error) {
        console.error("Error fetching exhibition time:", error);
        return;
      }

      if (data?.time) {
        const fetchedTime = new Date(data.time).getTime();
        setTargetDate(fetchedTime);
        setTimeLeft(calculateTimeLeft(fetchedTime));
      }
    };

    fetchExhibitionTime();
  }, []);

  useEffect(() => {
    if (!targetDate) return;

    const interval = setInterval(() => {
      setTimeLeft(calculateTimeLeft(targetDate));
    }, 1000);

    return () => clearInterval(interval);
  }, [targetDate]);

  if (!targetDate) {
    return <div className="countdownCont">Loading...</div>;
  }

  return (
    <div id="demo" className="countdownCont">
      {timeLeft ? (
        <>
          <div className="timeFlex">
            <h1>{timeLeft.days}</h1>
            <h5>Days</h5>
          </div>

          <div className="timeFlex">
            <h1>{timeLeft.hours}</h1>
            <h5>Hours</h5>
          </div>

          <div className="timeFlex">
            <h1>{timeLeft.minutes}</h1>
            <h5>Minutes</h5>
          </div>

          <div className="timeFlex">
            <h1>{timeLeft.seconds}</h1>
            <h5>Seconds</h5>
          </div>
        </>
      ) : (
        "EXPIRED"
      )}
    </div>
  );
};

export default CountdownTimer;