import React from "react";
import { useCallback, useMemo, useEffect, useState, useRef } from "react";

const Index = () => {
  const x = 0;
  const ref = useRef(0);
  console.log(ref, ref.current);

  const url = "http:/www.course-api.com/javascript-store-products";
  const [count, setCount] = useState(0);

  return (
    <div>
      <section>
        <h1>Count:{count}</h1>
        <button
          className="mx-2 p-1 bg-pink-300 rounded-lg"
          onClick={() => setCount(count + 1)}
        >
          Click to Increase(State Variable)
        </button>
      </section>
      <section>
        <h1>Count:{x}</h1>
        <button
          className="mx-2 p-1 bg-pink-300 rounded-lg"
          onClick={() => x + 1}
          // {console.log(x)}/
        >
          Click to Increase(Variable X)
        </button>
      </section>
      <section>
        <h1>Count:{ref.current}</h1>
        <button
          className="mx-2 p-1 bg-pink-300 rounded-lg"
          onClick={() => (ref.current = ref.current + 1)}
          // {console.log(x)}/
        >
          Click to view Ref (Variable ref)
        </button>
      </section>
    </div>
  );
};

export default Index;
