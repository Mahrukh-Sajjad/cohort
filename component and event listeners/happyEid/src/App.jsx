import React from "react";
import { Fragment } from "react";

const App = () => {
  // js logic
  const handleClick = () => {
    // This is a non-parametrized function
    alert("Button Clicked!");
  };
  const handleParam = (msg) => {
    alert(msg);
  };
  const wrapperHandler = () => {
    handleParam("Mahrukh is great");
  };
  return (
    <>
      <div>Hello</div>
      <div>World</div>
      <button onClick={handleClick}>Click</button>
      <button onClick={wrapperHandler}>Click(param)</button>
    </>
  );

  console.log("Hello World"); // this statement will not execute because it is
  // written after return statement.
  // whenever we write javascript expression inside jsx we use curly braces so in case of directly
  // calling a function inside curly braces we give reference of function without round braces
  // while using event listener otherwise it will run the function inside curly braces immediately.
};

export default App;
