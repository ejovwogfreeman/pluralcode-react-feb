import React from "react";

// props using the props key word
const Button = (props) => {
  return <button style={{ color: props.color }}>{props.text}</button>;
};

// using object destructuring
// const Button = ({ text, color }) => {
//   return <button style={{ backgroundColor: color }}>{text}</button>;
// };

export default Button;
