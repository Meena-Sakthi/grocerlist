import React, { useState } from "react";
import { text } from "./data";

const Para = () => {
  const [count, setCount] = useState(0);
  const [para, setPara] = useState([]);
  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log("handleSublit calleeedd..........");
    let amount = parseInt(count);
    if (amount <= 0) {
      amount = 1;
    }
    if (amount >= text.length) {
      amount = text.length;
    }
    setPara(text.slice(0, amount));
    // console.log("Ampunt.........", amount);
  };
  return (
    <div className=" text-center mx-auto">
      <h1 className="text-2xl font-bold  text-purple-700">
        {" "}
        Pargraph Displayer
      </h1>
      <br />
      <form onSubmit={handleSubmit}>
        <label htmlFor="amount">Enter No. Of Paragraphs</label>
        <input
          className="p-2 m-3 border-3 border-black shadow-lg rounded-lg"
          name="amount"
          id="amount"
          type="number"
          value={count}
          onChange={(e) => setCount(e.target.value)}
        />
        <button
          className="p-2-m3 border-3 border-gray-200  bg-purple-500 shadow-lg rounded-lg"

          // type="submit"
        >
          Click to generate
        </button>
      </form>
      <article className="text-md font-bold  text-purple-700">
        {para.map((item, index) => (
          <div id="index">
            <h1>{item}</h1>
          </div>
        ))}
      </article>
    </div>
  );
};

export default Para;
