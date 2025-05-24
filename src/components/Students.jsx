import React from "react";

const Students = ({ students }) => {
  console.log(students);
  let count = 1;
  return (
    <>
      <h1>My students are</h1>
      <table border={1} width="100%">
        <thead>
          <tr>
            <th>S/N</th>
            <th>NAME</th>
            <th>AGE</th>
            <th>COURSE</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student) => (
            <tr>
              <tr>{count++}</tr>
              <td>{student.name}</td>
              <td>{student.age}</td>
              <td>{student.course}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default Students;
