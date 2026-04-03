import React from "react";
import { useForm } from "react-hook-form";

const Form = ({ setEmployees, setToggle, editEmployee }) => {
  let {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid },
  } = useForm({
    mode: "onChange",
    defaultValues: editEmployee,
  });

  let handleFormSubmit = (data) => {
    if (editEmployee) {
      setEmployees((prev) => {
        return prev.map((val) => {
          return val.emp_email === editEmployee.emp_email
            ? { ...val, ...data }
            : val;
        });
      });
    } else {
      setEmployees((prev) => [...prev, data]);
    }

    reset();
    setToggle(false);
  };

  console.log("errors", errors);

  return (
    <div className="flex flex-col items-center gap-10">
      <h1 className="text-5xl font-semibold text-blue-500">Add Employee</h1>
      <form
        onSubmit={handleSubmit(handleFormSubmit)}
        className="p-6 gap-4 bg-white rounded-xl flex flex-col w-[40%]"
        action=""
      >
        <input
          {...register("emp_name", { required: "Employee name is required" })}
          className="outline-0 border-2 text-xl rounded-xl border-gray-300 py-3 px-4"
          type="text"
          placeholder="Employee Name"
        />
        {errors.emp_name && (
          <p className="text-red-600">{errors.emp_name.message}</p>
        )}
        <input
          {...register("emp_email", { required: "Employee email is required" })}
          className="outline-0 border-2 text-xl rounded-xl border-gray-300 py-3 px-4"
          type="text"
          placeholder="Employee Email"
        />
        {errors.emp_email && (
          <p className="text-red-600">{errors.emp_email.message}</p>
        )}
        <input
          {...register("emp_mobile", {
            required: "Employee Mobile is required",
            minLength: {
              value: 10,
              message: "Minimum 10 digits are required",
            },
            maxLength: {
              value: 10,
              message: "Maximum 10 digits are required",
            },
          })}
          className="outline-0 border-2 text-xl rounded-xl border-gray-300 py-3 px-4"
          type="text"
          placeholder="Employee Mobile"
        />
        {errors.emp_mobile && (
          <p className="text-red-600">{errors.emp_mobile.message}</p>
        )}
        <input
          {...register("emp_des", {
            required: "Employee designation is required",
          })}
          className="outline-0 border-2 text-xl rounded-xl border-gray-300 py-3 px-4"
          type="text"
          placeholder="Employee designation"
        />
        {errors.emp_des && (
          <p className="text-red-600">{errors.emp_des.message}</p>
        )}
        <div className="flex gap-6">
          <div className="flex gap-6">
            <span>Manager</span>
            <input
              {...register("role", { required: "Role is requires" })}
              value="manager"
              type="radio"
            />
          </div>
          <div className="flex gap-6">
            <span>Employee</span>
            <input
              {...register("role", { required: "Role is requires" })}
              value="employee"
              type="radio"
            />
          </div>
        </div>
        <button
          disabled={!isValid}
          className={`rounded-xl ${
            isValid ? "bg-green-600" : "bg-gray-300"
          } text-white w-full py-4 cursor-pointer`}
        >
          Add Employee
        </button>
      </form>
    </div>
  );
};

export default Form;
