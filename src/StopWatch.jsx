import React, { useEffect, useRef, useState } from "react";

const StopWatch = () => {
  const [isRunning, setIsRunning] = useState(false);
  const [time, setTime] = useState(0);
  const timerID = useRef();

  const formatTime = (time) => {
    const min = Math.floor(time / 60);
    const sec = time % 60;
    return `${min}:${sec < 10 ? "0" + sec : sec}`;
  };

  const handleReset = () => {
    setIsRunning(false);
    setTime(0);
  }

  useEffect(() => {
    timerID.current = setTimeout(()=>{
        if(isRunning)
            setTime((prv)=> prv + 1);
    }, 1000)

    return () => {
        clearTimeout(timerID.current);
    }

  }, [isRunning, time])

  const handleToggel = () => setIsRunning(!isRunning);

  return (
    <div>
      <h1>Stopwatch</h1>
      <p>Time: {formatTime(time)}</p>
      <button onClick={handleToggel}>{isRunning ? "Stope" : "Start"}</button>
      <button onClick={handleReset}>Reset</button>
    </div>
  );
};

export default StopWatch;
