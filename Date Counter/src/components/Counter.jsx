import React, { useState } from "react";

const Counter = () => {
  const [counter, setCounter] = useState(0);
  const [step, setStep] = useState(1);
  const date = new Date();
  date.setDate(date.getDate() + counter);
  return (
    <>
      <div style={{ marginBottom: "20px" }}>
        <button
          style={{ marginRight: "20px" }}
          onClick={() => setStep((s) => s - 1)}
        >
          -{" "}
        </button>
        <span>step:{step}</span>
        <button
          style={{ marginLeft: "20px" }}
          onClick={() => setStep((s) => s + 1)}
        >
          +{" "}
        </button>
      </div>
      <button
        style={{ marginRight: "20px" }}
        onClick={() => setCounter((count) => count - step)}
      >
        -{" "}
      </button>
      <span>counter:{counter}</span>
      <button
        style={{ marginLeft: "20px" }}
        onClick={() => setCounter((count) => count + step)}
      >
        +{" "}
      </button>

      <p>
        <span>
          {counter === 0
            ? "Today is "
            : counter > 0
            ? `${counter} days from todays is  `
            : `${Math.abs(counter)} days from todays was `}
        </span>
        <span>{date.toDateString()}</span>
      </p>
    </>
  );
};

export default Counter;
