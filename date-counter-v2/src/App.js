import React, { useState } from 'react';
import './App.css';

function App() {
  return (
    <div className='App'>
      <Counter />
    </div>
  );
}

function Counter() {
  const [stepCount, setStepCount] = useState(1);
  const [count, setCount] = useState(0);

  function handleClick(event) {
    if (event.target.value === 'countMinus') {
      setCount((prev) => prev - stepCount);
    } else if (event.target.value === 'countPlus') {
      setCount((prev) => prev + stepCount);
    }
  }

  function handleChange(event) {
    setStepCount((prev) => Number(event.target.value));
  }

  function handleInputChange(event) {
    setCount((prev) => Number(event.target.value));
  }

  function reset(event) {
    setStepCount(1);
    setCount(0);
  }

  const currentDate = new Date();
  const targetDate = new Date(currentDate);
  targetDate.setDate(currentDate.getDate() - count * -1);

  return (
    <>
      <div>
        <input
          type='range'
          min='0'
          max='10'
          value={stepCount}
          onChange={handleChange}></input>
        Step: {stepCount}
      </div>
      <div>
        <button value='countMinus' onClick={handleClick}>
          -
        </button>
        <input type='text' value={count} onChange={handleInputChange}></input>
        <button value='countPlus' onClick={handleClick}>
          +
        </button>
        <p>
          {count === 0 && `Today is ${currentDate.toDateString()}`}
          {count > 0 &&
            `${count} days from today is ${new Date(
              currentDate.getTime() + count * 24 * 60 * 60 * 1000
            ).toDateString()}`}
          {count < 0 &&
            `${count * -1} days ago was ${targetDate.toDateString()}`}
        </p>
        {stepCount !== 1 || count !== 0 ? (
          <button onClick={reset}>Reset</button>
        ) : (
          ''
        )}
      </div>
    </>
  );
}

export default App;
