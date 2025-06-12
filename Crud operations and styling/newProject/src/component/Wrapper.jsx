import React, { createContext } from "react";
import { useState } from "react";

export const todocontext = createContext(null);
const Wrapper = (props) => {
  const [todos, settodos] = useState([
    { id: 1, title: "kam ker lai bhai", isCompleted: false },
  ]);
  return (
    <div>
      <todocontext.Provider value={[todos, settodos]}>
        {props.children}
      </todocontext.Provider>
      {/* Anything wrappe din opening and closing bracket while rendering wrapper componet will show up here 
      at props.children */}
    </div>
  );
};

export default Wrapper;
