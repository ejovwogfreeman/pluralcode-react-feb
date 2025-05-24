import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  //   const count = 0;
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => setCount(count - 1)}>DECREASE</button>
      <button onClick={() => setCount(0)}>RESET</button>
      <button onClick={() => setCount(count + 1)}>INCREASE</button>
    </div>
  );
};

export default Counter;
