import React from "react";

const ChildOfComponent1 = ({ name, person, students }) => {
  return (
    <div>
      <h1>{name}</h1>
      <h2>
        {person.name} - {person.email}
      </h2>
      <ul>
        <h2>My students are</h2>
        {students.map((x) => (
          <li key={Math.random()}>{x}</li>
        ))}
      </ul>
    </div>
  );
};

export default ChildOfComponent1;
