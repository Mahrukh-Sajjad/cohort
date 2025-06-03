import React, { useState } from "react";
import Create from "./components/Create";
import Read from "./components/Read";

const App = () => {
  //Two way binding is just for form elements
  // In two binding data we enter in form elements is stored in react
  // and from react it shows upto the screen. So this is called twoway binding
  // when react saves wt you are entering in input element then that;s called controlled element.
  //  We put onChange in input to store things in react and  value to give back things
  // from react to input.
  // React says add only configuration code in app.js  spread remaining code to  other files.
  // One component for one functionality.
  // Component name always start with capital letters.
  // Props drilling means sending data from parents to child unidirectional.
  // <Read users={users} setusers={setusers}/>
  // we will receive data in the form of props parameter
  // props.user and props.setUsers

  const SubmitHandler = (e) => {
    e.preventDefault(); // This is used when we dont want refresh page while submitting the form.
    const newUser = { fullName, age };
    console.log(newUser); //We are going to send this data to database,api,backend
  };
  const [users, setUsers] = useState([
    { name: "John", age: 12 },
    { name: "Ankur", age: 32 },
    { name: "Ayush", age: 22 },
  ]);
  const renderuser = users.map((user, index) => {});
  return (
    <div>
      <Create />
      <hr />
      <Read />
    </div>
  );
};

export default App;
