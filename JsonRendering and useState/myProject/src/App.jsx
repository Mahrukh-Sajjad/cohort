import React from "react";
import RenderJson from "./RenderJson";
import State from "./State";

const App = () => {
  let n = 12;
  let s = "Hello World";
  let b = false;
  let nu = null;
  let un = undefined;
  let arr = [<h1>Hey</h1>, null, undefined, 12, "hello"]; // as it is jsx so we can write html elements inside array.
  let obj = { name: "john", age: 89 };
  return (
    <div>
      {/* <h1>Datatypes</h1>
      <h2>Number:{n}</h2>
      <h2>String:{s}</h2>
      <h2>boolean:{b ? "Hello" : "Not hello"}</h2>
      <h2>null:{nu}</h2>
      <h2>undefined:{un}</h2>
      <h2>Array:{arr}</h2>
      <h2>
        Object:{obj.name}|{obj.age}
      </h2>
      {/*We can't see boolean values on browser barcause boolean values are used for comparison ,conditioning */}
      {/*null and undefined are also not shown on browser because these are reserved keywords same goes for boolean
      while number and string are data */}
      {/*Array elements are displayed concatenated way and only those values are displayed which normally display */}
      {/*You can't render objects in view as whole but you can show properties of object*/}
      {/* <RenderJson /> */}
      <State />
    </div>
  );
};

export default App;
