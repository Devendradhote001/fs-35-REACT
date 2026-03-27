import React, { useState } from "react";

const Form = () => {
  const [formValues, setFormValues] = useState({});

  let handleChange = (e) => {
    let { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  let handleSubmit = (e) => {
    e.preventDefault();
    console.log(formValues);
  };

  return (
    <div className="flex flex-col items-center gap-10">
      <h1 className="text-5xl font-semibold text-blue-500">Add Employee</h1>
      <form
        onSubmit={handleSubmit}
        className="p-6 gap-4 bg-white rounded-xl flex flex-col w-[40%]"
        action=""
      >
        <input
          name="employee_name"
          onChange={handleChange}
          className="outline-0 border-2 text-xl rounded-xl border-gray-300 py-3 px-4"
          type="text"
          placeholder="Employee Name"
        />
        <input
          name="employee_email"
          onChange={handleChange}
          className="outline-0 border-2 text-xl rounded-xl border-gray-300 py-3 px-4"
          type="text"
          placeholder="Employee Email"
        />
        <input
          name="employee_mobile"
          onChange={handleChange}
          className="outline-0 border-2 text-xl rounded-xl border-gray-300 py-3 px-4"
          type="text"
          placeholder="Employee Mobile"
        />
        <input
          name="designation"
          onChange={handleChange}
          className="outline-0 border-2 text-xl rounded-xl border-gray-300 py-3 px-4"
          type="text"
          placeholder="Employee designation"
        />
        <div className="flex gap-6">
          <div className="flex gap-6">
            <span>Manager</span>
            <input
              name="role"
              onChange={handleChange}
              value="manager"
              type="radio"
            />
          </div>
          <div className="flex gap-6">
            <span>Employee</span>
            <input
              name="role"
              value="employee"
              onChange={handleChange}
              type="radio"
            />
          </div>
        </div>
        <button className="rounded-xl bg-green-600 text-white w-full py-4 cursor-pointer">
          Add Employee
        </button>
      </form>
    </div>
  );
};

export default Form;
