import React from "react";
import { useState } from "react";

const UseStateObjects = () => {
  const [person, setPerson] = useState({
    name: "Veena",
    age: 26,
    message: "Initial Message",
  });
  const handleChange = () => {
    // if (msg === "Initial Message") setPerson("New Changed Message");
    setPerson({ ...person, message: "New Updated Message" });
  };
  console.log(person);
  return (
    <div className=" text-center font-bold">
      <h1>UseStateObjects Example</h1>
      <h3>{person.name}</h3>
      <h3>{person.age}</h3>
      <h3>{person.message}</h3>
      <button
        className="text-center p-5 m-5 rounded-lg bg-orange-600"
        onClick={handleChange}
      >
        Change Message
      </button>
    </div>
  );
};

export default UseStateObjects;
