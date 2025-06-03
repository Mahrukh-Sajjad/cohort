import React from "react";

const Read = (props) => {
  return (
    <div>
      <h1>User Data</h1>
      <ol>{props.renderuser}</ol>
    </div>
  );
};

export default Read;
