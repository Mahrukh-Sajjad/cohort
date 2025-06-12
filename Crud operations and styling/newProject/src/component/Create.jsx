import React, { useState } from "react";
import { nanoid } from "nanoid";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { todocontext } from "./Wrapper";
import { useContext } from "react";

const Create = () => {
  const [todos, settodos] = useContext(todocontext);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const submitHandler = (data) => {
    data.id = nanoid();
    data.isCompleted = false;
    console.log(data);

    const copytodos = [...todos];
    copytodos.push(data);
    settodos(copytodos);
    toast.success("todo created!");

    reset();
  };
  // console.log(newtodo);
  // const copytodos = [...todos]; // we are making the copy of todos which is readonly we will replace copy with settodos
  // copytodos.push(newtodo);
  // settodos(copytodos);
  // settitle("");
  console.log(errors);

  const buttoncss = {
    color: "white",
    backgroundColor: "transparent",
    border: "1px solid white",
    borderRadius: "5px",
  };
  return (
    <div>
      <form onSubmit={handleSubmit(submitHandler)}>
        <input
          type="text"
          {...register("title", { required: "title can't be empty" })}
          placeholder="title"
        />
        {/* {errors && errors.title && errors.title.message && (
          <small>{errors.title.message}</small>
        )} */}
        <small>{errors?.title?.message}</small>
        <br /> <br />
        <button style={buttoncss}>Create Todo</button>
      </form>
    </div>
  );
};

export default Create;
