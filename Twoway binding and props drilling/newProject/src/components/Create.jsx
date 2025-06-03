import React from "react";

const Create = () => {
  const [fullName, setFullName] = useState("");
  const [age, setAge] = useState("18");
  return (
    <div>
      <h1>Register User</h1>
      <form onSubmit={SubmitHandler}>
        <input
          type="text"
          placeholder="Full Name"
          onChange={(e) => {
            setFullName(e.target.value);
          }}
          value={fullName}
        />
        <input
          type="number"
          placeholder="Age"
          value={age}
          onChange={(e) => {
            setAge(e.target.value);
          }}
        />
        <button>Submit</button>
      </form>
    </div>
  );
};

export default Create;
