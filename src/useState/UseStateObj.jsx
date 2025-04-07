import React from "react";
import { useState } from "react";

//* Form data using useState Hook

//! Basic useState syntax using Object
// const [state, setState] = useState({ key1: value1, key2: value2 });

const UseStateObj = () => {
  //* Initial formData state with an object
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  //* Handle input Function
  const handleInput = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div>
      <form>
        <input
          type="text"
          name="name"
          placeholder="Enter your name..."
          value={formData.name}
          onChange={handleInput}
        />

        <input
          type="email"
          name="email"
          placeholder="Enter your email..."
          value={formData.email}
          onChange={handleInput}
        />

        <input
          type="password"
          name="password"
          placeholder="Enter your password"
          value={formData.password}
          onChange={handleInput}
        />

        <h2>{JSON.stringify(formData)}</h2>
      </form>
    </div>
  );
};

export default UseStateObj;
