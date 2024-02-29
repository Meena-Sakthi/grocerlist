import React from "react";
import { useState } from "react";

const Toggle = () => {
  const [error, setError] = useState(false);

  return (
    <div>
      <h1> </h1>
      <button
        onClick={() => {
          setError(!error);
        }}
      >
        Toggle Error
      </button>
      {error ? <h1> Error</h1> : <h1>No Error</h1>}
    </div>
  );
};

export default Toggle;
