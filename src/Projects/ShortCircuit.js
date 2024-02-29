import React from "react";
import { useState } from "react";

const ShortCircuit = () => {
  // const [text, setText] = useState("");
  // const [error, setError] = useState(false);
  const text = "Meena";
  const firstValue = text && "Hello World";

  return (
    <div>
      <h2 className="text-center font-3xl font-bold mt-10">{firstValue}</h2>
    </div>
  );
};

export default ShortCircuit;
