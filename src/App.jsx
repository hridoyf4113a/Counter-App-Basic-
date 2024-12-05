import React, { useState } from "react";
import "./index.css";

export default function App() {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1);
  };
  const handleReset = () => {
    setCount(0);
  };
  return (
    <div className="mainContainer">
      <div className="container">
        <div className="counter">{count}</div>
        <button onClick={handleClick} className="reset">
          Count
        </button>
        <button onClick={handleReset} className="reset">
          Reset
        </button>
      </div>
    </div>
  );
}
