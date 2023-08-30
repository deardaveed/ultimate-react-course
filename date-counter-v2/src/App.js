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
    if (event.target.value === 'stepMinus') {
      setStepCount((prev) => prev - 1);
    } else if (event.target.value === 'stepPlus') {
      setStepCount((prev) => prev + 1);
    } else if (event.target.value === 'countMinus') {
      setCount((prev) => prev - stepCount);
    } else if (event.target.value === 'countPlus') {
      setCount((prev) => prev + stepCount);
    }
  }

  const currentDate = new Date();
  const targetDate = new Date(currentDate);
  targetDate.setDate(currentDate.getDate() - count * -1);

  // function dayOfTheWeek() {}

  return (
    <>
      <div>
        <button value='stepMinus' onClick={handleClick}>
          -
        </button>
        Step: {stepCount}
        <button value='stepPlus' onClick={handleClick}>
          +
        </button>
      </div>
      <div>
        <button value='countMinus' onClick={handleClick}>
          -
        </button>
        Count: {count}
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
      </div>
    </>
  );
}

export default App;
