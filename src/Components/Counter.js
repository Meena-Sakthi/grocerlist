import React from "react";
import { useState } from "react";

const Counter = () => {
  const [value, setValue] = useState(0);

  return (
    <div className="text-center">
      <h4 className="text-xl font-extrabold p-5 m-5 rounded-xl bg-red-500">
        My Counter
      </h4>
      <h4 className="text-xl font-extrabold p-5">{value}</h4>
      <button
        className="p-5 m-5 rounded-xl bg-green-500"
        onClick={() => setValue(value + 1)}
      >
        {" "}
        Increment
      </button>

      <button
        className="p-5 m-5 rounded-xl bg-red-500"
        onClick={() => setValue(value - 1)}
      >
        {" "}
        Decrease
      </button>
      <br></br>
      <button
        className="p-5 m-5 rounded-xl bg-blue-300"
        onClick={() => setValue(0)}
      >
        {" "}
        Clear
      </button>
    </div>
  );
};

export default Counter;
