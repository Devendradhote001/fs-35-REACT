import React, { useState } from "react";
import { useForm } from "react-hook-form";

const App = () => {
  let {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid },
  } = useForm();

  console.log("isValid", isValid);

  return (
    <div>
      <h1>App</h1>

      <form
        onSubmit={handleSubmit((data) => {
          console.log(data);
        })}
        action=""
      >
        <input
          {...register("name", { required: "Name is required" })}
          type="text"
          placeholder="Name"
        />{" "}
        <br />
        {errors.name && <p style={{ color: "red" }}>{errors.name.message}</p>}
        <input
          {...register("email", { required: "Email is required" })}
          type="text"
          placeholder="Email"
        />{" "}
        <br />
        {errors.email && <p style={{ color: "red" }}>{errors.email.message}</p>}
        <input
          {...register("pass", { required: "Password is required" })}
          type="text"
          placeholder="Password"
        />{" "}
        <br />
        {errors.pass && <p style={{ color: "red" }}>{errors.pass.message}</p>}
        <input
          {...register("mobile", {
            required: "Mobile is required",
            minLength: {
              value: 10,
              message: "minimum 10 digits are required",
            },
            maxLength: {
              value: 10,
              message: "Maximum 10 digits are required",
            },
          })}
          type="text"
          placeholder="Mobile"
        />{" "}
        <br />
        {errors.mobile && (
          <p style={{ color: "red" }}>{errors.mobile.message}</p>
        )}
        <button disabled={!isValid}>Submit</button>
      </form>
    </div>
  );
};

export default App;
