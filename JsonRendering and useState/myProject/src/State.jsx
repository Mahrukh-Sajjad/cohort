import React, { useState } from "react";

const State = () => {
  //   let username = "sarthak";
  const [username, setUsername] = useState("sarthak");
  const changeHandler = () => {
    // username = "Ankur";// these changings will not be displayed in  browser so we will use useState hook
    setUsername("Ankur"); // this is asynchronous line of <code className=""></code>
  };
  console.log(username);
  return (
    <div>
      <h1>Username</h1>
      <h2>{username}</h2>
      <button onClick={changeHandler}>Change Name</button>
    </div>
  );
};

export default State;
