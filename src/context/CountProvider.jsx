import React, { useReducer } from 'react';
import { createContext } from 'react';

// 1️⃣ Initial state object for the reducer
const initialValue = { count: 0 };

// 2️⃣ Reducer function: handles different actions to update the state
const reducer = ({ count }, { type, payload }) => {
  switch (type) {
    case 'INCREMENT':
      return { count: count + payload };
    case 'DECREMENT':
      return { count: count - payload };
    case 'RESET':
      return { count: 0 };
    default:
      // If action type is unknown, return current state
      return { count };
  }
};

// 3️⃣ Create a Context to allow global access to state and dispatch
export const CounterContext = createContext();

// 4️⃣ Create a Provider component that wraps the app (or parts of it)
const CountProvider = ({ children }) => {
  // 5️⃣ useReducer hook returns the current state and dispatch function
  const [state, dispatch] = useReducer(reducer, initialValue);

  return (
    // 6️⃣ Provide the state and dispatch to the children components via Context
    <CounterContext.Provider value={{ state, dispatch }}>
      {children}
    </CounterContext.Provider>
  );
};

export default CountProvider;
