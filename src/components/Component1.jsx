import React from "react";
import Button from "./Button";
import ChildOfComponent1 from "./ChildOfComponent1";

const Component1 = ({ name, person, students }) => {
  return (
    <div>
      <h1>
        Hello component 1 <Button text="click me 1" color="blue" />
      </h1>
      <ChildOfComponent1 name={name} person={person} students={students} />
    </div>
  );
};

export default Component1;
