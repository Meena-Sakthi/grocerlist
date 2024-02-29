import React, { useState } from "react";
import data from "./dataa";

const Para = () => {
  const [count, setCount] = useState(0);
  const handleCount = () => {};
  const handleSubmit = (e) => {
    console.log("Click Event");
    console.log(e.target.name);
    setCount(parseInt(e.target.value));
    console.log(count);
  };
  return (
    <section className="text-center text-2xl font-bold text-orange-500">
      <h2>Tired of boring Lorem ipsum???</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="" className="ml-5">
          Enter{" "}
        </label>
        <input
          type="number"
          className=" w-24 h-10 p-1 m-1  ml-5 border border-5 border-red-950 rounded-lg shadow-lg"
          value={count}
          name="counter"
          // defaultValue="0"
          onChange={(e) => {
            setCount(e.target.value);
          }}
        />
        <label htmlFor="amount" className="ml-5">
          Paragraphs
        </label>
        <br />
        <button
          className="p-1 mt-2
         border border-5 rounded-lg shadow-lg bg-pink-400 text-blue-950"
          type="submit"
        >
          Generate
        </button>
      </form>
    </section>
  );
};

export default Para;
