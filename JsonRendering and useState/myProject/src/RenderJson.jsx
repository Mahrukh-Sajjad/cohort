import React from "react";

const RenderJson = () => {
  const profiles = [
    { name: "sarthak", age: 24 },
    { name: "ankur", age: 54 },
    { name: "akarsh", age: 45 },
  ];
  const updatedProfile = profiles.map((profile, index) => {
    //This is used when u return a new array
    // we returned a li showing name and age of each object.and that is saved in updatedProfile
    return (
      <li key={index}>
        {/*every jsx elemrnt returned by map should have a key*/}
        <span>name:{profile.name}</span>
        <small>age:{profile.age}</small>
      </li>
    );
  });
  profiles.forEach((profile, index) => {}); // nothing is returned
  return (
    <div>
      <h1>Rendering Json</h1>
      <ol>{updatedProfile}</ol>
      {/* This updated profile li is used inside ol*/}
      {/* {profiles} this is wrong approach we can't show array of objects here directly */}
    </div>
  );
};

export default RenderJson;
