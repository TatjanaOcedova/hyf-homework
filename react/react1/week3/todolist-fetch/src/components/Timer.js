import { useState, useEffect } from "react";

const Timer = () => {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const timeInterval = setInterval(() => setSeconds((sec) => sec + 1), 1000);
    return () => {
      clearInterval(timeInterval);
    };
  }, []);

  return <p>You are {seconds} seconds on this page</p>;
};

export default Timer;
