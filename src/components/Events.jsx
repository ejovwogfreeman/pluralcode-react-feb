import React, { useState } from "react";

const Events = () => {
  // const [state, setState] = useState(initialState);
  const [name, setName] = useState("Godbless");
  const [age, setAge] = useState(30);
  const [isChanged, setIsChanged] = useState(true);

  const handleClick = () => {
    if (isChanged) {
      setName("Freeman");
      setAge("35");
      setIsChanged(false);
    } else {
      setName("Godbless");
      setAge("30");
      setIsChanged(true);
    }
  };

  return (
    <div>
      {/* <button onClick={() => alert("hello world")}>Click me</button> */}
      <h1>
        Hello {name}, I am {age} years old
      </h1>
      {/* <button onClick={() => setName("freeman")}>Click me</button> */}
      <button onClick={handleClick}>click me</button>
    </div>
  );
};

export default Events;
