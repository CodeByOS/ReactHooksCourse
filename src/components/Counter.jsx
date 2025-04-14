import React, { useContext } from 'react';
// 1️⃣ Import the context that provides state and dispatch
import { CounterContext } from '../context/CountProvider';

const Counter = () => {
  // 2️⃣ Use useContext to consume state and dispatch from the CounterContext
  const { state, dispatch } = useContext(CounterContext);

  return (
    <div>
      {/* 3️⃣ Display the current count from state */}
      <h2>Count: {state.count}</h2>

      {/* 4️⃣ Buttons to dispatch different actions to update the count */}
      <div>
        {/* INCREMENT by 5 */}
        <button onClick={() => dispatch({ type: 'INCREMENT', payload: 5 })}>
          Increment
        </button>

        {/* DECREMENT by 5 */}
        <button onClick={() => dispatch({ type: 'DECREMENT', payload: 5 })}>
          Decrement
        </button>

        {/* RESET count to 0 (payload isn't used here, but included for consistency) */}
        <button onClick={() => dispatch({ type: 'RESET', payload: 5 })}>
          Reset
        </button>
      </div>
    </div>
  );
};

export default Counter;
