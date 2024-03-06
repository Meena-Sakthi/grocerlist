import React from "react";
import { useState } from "react";
import Values from "values.js";
import SingleColor from "./SingleColor";

const ColorGenerator = () => {
  const [color, setColor] = useState("");
  const [error, setError] = useState(false);
  const [list, setList] = useState([]);
  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log("Handle submit calleed");
    try {
      const colors = new Values(color).all(10);
      // console.log(colors);
      setList(colors);
    } catch (error) {
      setError(true);
      console.log(error);
    }
  };
  return (
    <div>
      <header>
        <h1 className="text-center font-bold text-orange-600  text-2xl">
          Colour Generator
        </h1>
        <div className="text-center font-bold text-orange-600  text-2xl w-full h-20 rounded-xl">
          ---------
        </div>
      </header>
      <section>
        <form onSubmit={handleSubmit}>
          <label className="m-3" htmlFor="color">
            Enter Color Code
          </label>
          <input
            type="text"
            name="color"
            // defaultValue=""
            // placeholder="#f15025"
            value={color}
            onChange={(e) => setColor(e.target.value)}
            className={error ? "border border-red-500 p-3" : " p-3"}
          />
          <button className="p-2 m-2 rounded-lg bg-green-200">Submit</button>
        </form>
      </section>
      <section className="">
        {list &&
          list.map((lis, index) => {
            return (
              <SingleColor key={index} {...lis} hex={lis.hex} index={index} />
            );
            // <div key={lis.index}>
            //   <h1>{lis.rgb}</h1>
            // </div>
          })}
      </section>
    </div>
  );
};

export default ColorGenerator;
