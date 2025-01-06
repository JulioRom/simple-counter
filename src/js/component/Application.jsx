import React, { useState, useEffect } from "react";
import SecondsCounter from "./components/SecondsCounter";

const Application = () => {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds((prev) => prev + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="container text-center py-5">
      <h1>Seconds Counter</h1>
      <SecondsCounter seconds={seconds} />
    </div>
  );
};

export default Application;
