import React from "react";

const EmployeeCard = ({ employee, setToggle, setEditEmployee }) => {
  return (
    <div className="w-[25%] bg-white h-[80%] p-4 flex flex-col gap-4 rounded-xl border border-gray-500">
      <div className="w-[80%] flex items-center justify-center rounded-full overflow-hidden">
        <img
          className="w-full object-cover self-center"
          src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1064&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
        />
      </div>
      <div className="flex flex-col gap-2 text-xl">
        <h1>{employee.emp_name}</h1>
        <h1>{employee.emp_email}</h1>
        <h1>{employee.emp_mobile}</h1>
        <h1>{employee.emp_des}</h1>
        <h1>Role - {employee.role}</h1>
      </div>
      <div className="w-full flex gap-4 justify-between">
        <button
          onClick={() => {
            setEditEmployee(employee);
            setToggle(true);
          }}
          className="w-full py-3 rounded-xl bg-yellow-600 text-white "
        >
          Update
        </button>
        <button className="w-full py-3 rounded-xl bg-red-600 text-white ">
          Remove
        </button>
      </div>
    </div>
  );
};

export default EmployeeCard;
