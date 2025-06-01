// import { useState } from "react";

// const Hooks = () => {
//   // syntax of usestate hook
//   //   const [state, setState] = useState(initialState);

//   const [name, setName] = useState("godbless");

//   const [isDark, setIsDark] = useState(false);

//   //   console.log(name);

//   //   const handleStateChange = () => {
//   //     setName("mark");
//   //   };
//   //   setName("mark");

//   //   console.log(name);

//   //   const handleStateChange = (name) => {
//   //     setName(name);
//   //   };

//   const handleTheme = () => {
//     setIsDark(!isDark);
//     console.log(isDark);
//   };

//   const [userName, setUserName] = useState("");

//   return (
//     <div
//       style={{
//         backgroundColor: isDark ? "black" : "white",
//         color: isDark ? "white" : "black",
//       }}
//     >
//       <h1>{name}</h1>
//       {/* <button onClick={() => handleStateChange("mark")}>button</button> */}
//       {/* <button onClick={handleTheme}>
//         {isDark ? "switch to light mode" : "swhitch to dark mode"}
//       </button> */}
//       <form action="">
//         <input
//           type="text"
//           value={userName}
//           onChange={(e) => setUserName(e.target.value)}
//         />
//         <button>submit</button>
//       </form>
//     </div>
//   );
// };

// export default Hooks;

// import React, { useEffect } from "react";

// setTimeout(function, timetochange)
// setTimeout(() => {
//   console.log(1);
// }, 3000);

// useEffect(function, dependency)

// import { useState, useEffect } from "react";

// const Hooks = () => {
//   const [name, setName] = useState("godbless");
//   const [age, setAage] = useState(0);
//   const [bool, setBool] = useState(true);

//   const toggleBool = () => {
//     setBool(!bool);
//   };

//   useEffect(() => {
//     console.log("use effect ran");
//   });
//   useEffect(() => {
//     console.log("use effect ran");
//   }, []);
//   useEffect(() => {
//     console.log("use effect ran");
//   }, [name]);

//   const [count, setCount] = useState(0);

//   useEffect(() => {
//     setTimeout(() => {
//       setCount(count + 1);
//     }, 1000);
//   });

//   const [todosData, setTodosData] = useState([]);

//   const fetchData = async () => {
//     const res = await fetch("https://jsonplaceholder.typicode.com/tods");
//     const data = await res.json();
//     setTodosData(data);
//   };

//   useEffect(() => {
//     fetchData();
//   }, [todosData]);

//   return (
//     <div>
//       {/* <button onClick={() => setName("freeman")}>change name</button>
//       <button onClick={() => setAage(25)}>change age</button>
//       <button onClick={toggleBool}>change bool</button> */}
//       {/* <h1>The current count is {count}</h1> */}
//       {todosData.map((todo) => todo.title)}
//     </div>
//   );
// };

// export default Hooks;

// import React from "react";

// const Hooks = ({ user }) => {
//   return <div>Hello user {user}, form Hooks Component</div>;
// };

// export default Hooks;

import { useContext } from "react";
import { UserContext } from "../UserContext";

const Hooks = () => {
  const { user } = useContext(UserContext);
  console.log(user);
  return (
    <div>
      <h1>Hello</h1>
    </div>
  );
};

export default Hooks;
