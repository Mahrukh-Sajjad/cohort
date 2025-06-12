import React, { useState } from "react";
import { nanoid } from "nanoid";
import Create from "./component/Create";
import Read from "./component/Read";

const App = () => {
  // const [completed, setcompleted] = useState(false);
  // const [gender, setgender] = useState("male");
  // const [city, setcity] = useState("mumbai");

  return (
    <div>
      <Create />
      <Read />
      {/* <input
          checked={completed}
          type="checkbox"
          onChange={(e) => {
            setcompleted(e.target.checked);
          }}
        />{" "}
        Completed
        <br />
        <br />
        <input
          value="male"
          type="radio"
          checked={gender == "male" && true}
          onChange={(e) => {
            setgender(e.target.value);
          }}
        />
        male
        <input
          value="female"
          type="radio"
          onChange={(e) => {
            console.log(e.target.value);
          }}
          checked={gender == "female" && true}
        />
        female
        <br />
        <br />
        <select
          onChange={(e) => {
            setcity(e.target.value);
          }}
          value={city}
        >
          <option value="delhi">Delhi</option>
          <option value="mumbai">Mumbai</option>
          <option value="kolkata">Kolkata</option>
        </select>*/}
    </div>
  );
};

export default App;
