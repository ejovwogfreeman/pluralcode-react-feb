const Hello = () => {
  let sum = 5 + 5;

  let h1Style = {
    color: "red",
  };

  let isAuthenticated = true;

  // if (isAuthenticated) {
  //   return <h1>Hello user</h1>;
  // }

  return (
    <>
      <h1 className="h1">Hello from {sum}</h1>
      <h1 style={h1Style}>Hello from {sum}</h1>
      <h1
        style={{ color: "blue", fontStyle: "italic", backgroundColor: "green" }}
      >
        Hello from {sum}
      </h1>
      <h1>Hello from {sum}</h1>
      <h1>Hello from {sum}</h1>
      <h1>Hello from {sum}</h1>
      <h1>Hello from {sum}</h1>
      <form action="">
        <label htmlFor=""></label>
      </form>
      {/* {isAuthenticated ? <h1>Hello user</h1> : ""} */}
      {isAuthenticated && <h1>Hello user</h1>}
    </>
  );
};

export default Hello;
