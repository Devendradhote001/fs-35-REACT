import React, { useState } from "react";
import ProductCard from "./components/ProductCard";

const App = () => {
  const [formValues, setFormValues] = useState({});
  const [users, setUsers] = useState([]);
  console.log(users);

  let handleChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
  };

  let handleUpdate = (editUser) => {
    console.log(editUser);
    setFormValues(editUser);
  };

  let handleSubmit = (e) => {
    e.preventDefault();

    setUsers([...users, formValues]);
    setFormValues({
      name: "",
      email: "",
      mobile: "",
    });
  };

  return (
    <div>
      <h1>App</h1>

      <form onSubmit={handleSubmit} action="">
        <input
          value={formValues.name}
          name="name"
          onChange={handleChange}
          type="text"
          placeholder="Name"
        />{" "}
        <br /> <br />
        <input
          value={formValues.email}
          name="email"
          onChange={handleChange}
          type="text"
          placeholder="Email"
        />{" "}
        <br /> <br />
        <input
          value={formValues.mobile}
          name="mobile"
          onChange={handleChange}
          type="number"
          placeholder="Mobile"
        />{" "}
        <br /> <br />
        <button>Submit</button>
      </form>

      <div style={{ display: "flex" }}>
        {users?.map((elem) => {
          return <ProductCard user={elem} handleUpdate={handleUpdate} />;
        })}
      </div>
    </div>
  );
};

export default App;
