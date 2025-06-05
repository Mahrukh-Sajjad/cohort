import React from "react";

const Read = (props) => {
  const todos = props.todos;
  const settodos = props.settodos;
  const rendertodos = todos.map((todo) => {
    return (
      <li
        key={todo.id}
        style={{ color: todo.isCompleted ? "green" : "tomato" }}
      >
        {todo.title}
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
