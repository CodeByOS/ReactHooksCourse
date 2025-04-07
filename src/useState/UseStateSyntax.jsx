import React from "react";
import { useState } from "react";

// Creating A simple Counter App using useState Hook...

const UseStateSyntax = () => {
  // useState Syntax
  const [count, setCount] = useState(0); //Initial the count state to 0

  // Increment By 5 Function
  function incrementByFive() {
    for (let i = 0; i < 5; i++) {
      setCount((prevCount) => prevCount + 1);
    }
  }

  //! State updates are asynchronous. That means if we try to do this :
  // setCount(count + 1);
  // setCount(count + 1);
  //* the count value is not going to increase by 2, because both updates use the same stale count value

  //! We can solve this by using functional update:
  // setCount(prevCount => prevCount + 1);

  return (
    <div>
      COUNT IS : {count}
      <button onClick={() => setCount((prev) => prev + 1)}>Increment</button>
      <button onClick={() => setCount((prev) => prev - 1)}>Decrement</button>
      <button onClick={() => setCount(0)}>Reset</button>
      <button onClick={incrementByFive}>Increment By 5</button>
    </div>
  );
};

export default UseStateSyntax;
