import { useEffect, useState } from "react";

const Clock = () => {
  const [time, setTime] = useState(new Date().toLocaleTimeString());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
      //console.log("Timer");
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return <p>{time}</p>;
};

export default Clock;
