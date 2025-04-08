import React from "react";
import { useState } from "react";

const UseStateArray = () => {
  // 🟡 useState to hold an array of fruits
  const [fruits, setFruits] = useState([]);

  // 🟡 useState to hold the value of the input field
  const [newFruit, setNewFruit] = useState("");

  // 🟢 Function to add a new fruit to the array
  const addFruit = () => {
    if (newFruit.trim()) {
      // Add the new fruit to the existing array using spread syntax
      setFruits([...fruits, newFruit]);

      // Clear the input field after adding
      setNewFruit("");
    }
  };

  // 🔴 Function to remove a fruit by its index
  const removeFruit = (indexToRemove) => {
    // Filter out the fruit at the index to remove
    setFruits(fruits.filter((_, index) => index !== indexToRemove));
  };

  return (
    <div>
      <h2>Fruit List</h2>

      {/* 🔁 Loop through the fruits array and display each item in a list */}
      <ul>
        {fruits.map((fruit, index) => (
          <li key={index}>
            {fruit}
            {/* ❌ Button to remove this fruit from the list */}
            <button onClick={() => removeFruit(index)}>Remove</button>
          </li>
        ))}
      </ul>

      {/* 📝 Input field to type a new fruit */}
      <input
        type="text"
        value={newFruit} // Binds input field to `newFruit` state
        onChange={(e) => setNewFruit(e.target.value)} // Updates `newFruit` as user types
        placeholder="Add new Fruit"
      />

      {/* ➕ Button to add the typed fruit to the list */}
      <button onClick={addFruit}>Add</button>
    </div>
  );
};

export default UseStateArray;
