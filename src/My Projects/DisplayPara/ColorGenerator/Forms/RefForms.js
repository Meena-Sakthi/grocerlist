import React from "react";
import { useRef, useState } from "react";

const RefForms = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Handle Submit............");
    console.log(refContainer.current.value);
    refContainer.current.value = "";
  };
  const refContainer = useRef(null);

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Enter Name</label>
        <input type="text" ref={refContainer} />

        <button className="bg-blue-300 p-x-2 m-3" type="submit">
          Add
        </button>
      </form>
    </div>
  );
};

export default RefForms;
