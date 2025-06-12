import React, { useContext } from "react";
import { toast } from "react-toastify";
import { todocontext } from "./Wrapper";

const Read = () => {
  const [todos, settodos] = useContext(todocontext);

  const rendertodos = todos.map((todo) => {
    const deleteHandler = (id) => {
      const filtertodo = todos.filter((todo) => todo.id != id);
      settodos(filtertodo);
      toast.error("Todo deleted!");
    };
    return (
      <li
        key={todo.id}
        style={{ color: todo.isCompleted ? "green" : "tomato" }}
      >
        {todo.title} |{" "}
        <span
          onClick={() => {
            deleteHandler(todo.id);
          }}
        >
          Delete
        </span>
      </li>
    );
  });

  return (
    <div>
      <h1 style={{ color: "tomato" }}>Pending todos</h1>
      {/* for inline styles we use style attribute with two curly braces and we use like object*/}
      {/* We can use ternary operator while using inline style */}
      <ol>{rendertodos}</ol>
    </div>
  );
};

export default Read;
