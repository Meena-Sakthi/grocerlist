import React from "react";
import { useState, useEffect } from "react";

const UseEffectBasics = () => {
  const [value, setValue] = useState(0);
  useEffect(() => {
    document.title = ` Messages....(${value})`;
  }, [value]);
  const handleIncrease = () => {
    setValue(value + 1);
  };
  return (
    <div>
      <h1 className="mt-10 text-center font-2xl text-red-500 font-bold mb-5">
        My Timer
      </h1>
      <h2 className="text-center font-3xl text-orange-500 font-bold mb-5">
        {value}
      </h2>
      <div className="justify-center flex">
        <button
          className="text-center font-2xl text-red-blue font-bold p-2 m-auto bg-yellow-400 rounded-lg"
          onClick={() => handleIncrease()}
        >
          Click To Increase
        </button>
      </div>
    </div>
  );
};

export default UseEffectBasics;
