import React, { useState } from "react";
import { nanoid } from "nanoid";

const Create = (props) => {
  const todos = props.todos;
  const settodos = props.settodos;

  const [title, settitle] = useState("");
  const submitHandler = (e) => {
    e.preventDefault();
    const newtodo = {
      id: nanoid(),
      title,
      isCompleted: true,
    };
    console.log(newtodo);
    const copytodos = [...todos]; // we are making the copy of todos which is readonly we will replace copy with settodos
    copytodos.push(newtodo);
    settodos(copytodos);
    settitle("");
  };
  const buttoncss = {
    color: "white",
    backgroundColor: "transparent",
    border: "1px solid white",
    borderRadius: "5px",
  };
  return (
    <div>
      <form onSubmit={submitHandler}>
        <input
          type="text"
          placeholder="title"
          onChange={(e) => {
            settitle(e.target.value);
          }}
          value={title}
        />
        <br /> <br />
        <button style={buttoncss}>Create Todo</button>
      </form>
    </div>
  );
};

export default Create;
