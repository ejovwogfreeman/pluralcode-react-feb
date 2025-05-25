import React, { useState } from "react";
import "../css/Form.css";

const Form = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [nameErr, setNameErr] = useState("");
  const [emailErr, setEmailErr] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name) {
      setNameErr("please enter name");
      setTimeout(() => setNameErr(""), 3000);
    }

    if (!email) {
      setEmailErr("enter an email");
      setTimeout(() => setEmailErr(""), 3000);
    }

    console.log(name, email);
    setName("");
    setEmail("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="">Name</label>
      <input
        placeholder="e.g John Doe"
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      {nameErr && <span className="err">{nameErr}</span>}
      <label htmlFor="">Email</label>
      <input
        placeholder="e.g John@gmail.com"
        type="text"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      {emailErr && <span className="err">{emailErr}</span>}
      <button>SUBMIT</button>
    </form>
  );
};

export default Form;
