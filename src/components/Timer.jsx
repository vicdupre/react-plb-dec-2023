import { useEffect, useState } from "react";
import usePersistedState from "../hooks/usePersistedState";

const Timer = () => {
  const [time, setTime] = usePersistedState("timer", 0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let interval;
    if (isRunning) {
      interval = setInterval(() => setTime((time) => time + 1), 1000);
    } else if (interval) {
      clearInterval(interval);
      interval = null;
    }
    return () => {
      if (interval) {
        clearInterval(interval);
      }
    };
  }, [isRunning]);

  return (
    <div>
      <p>{time} secondes écoulées</p>
      <button onClick={() => setIsRunning((isRunning) => !isRunning)}>
        {isRunning ? "Arrêter" : "Lancer"} le timer
      </button>
    </div>
  );
};

export default Timer;
