import React from "react";
import { useRef } from "react";

const Refhook = () => {
  let refContainer = useRef("");
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(refContainer.current.value);
    refContainer.current.value = "";
  };
  return (
    <div className="w-96 m-auto bg-pink-100 border-black border-4 rounded-lg mt-10">
      <form
        type="submit"
        onSubmit={(e) => {
          handleSubmit(e);
        }}
      >
        <div>
          <label
            className="m-auto text-red-950 font-bold p-3 max-w-full"
            htmlFor="name"
          >
            Name
          </label>
          <input
            type="text"
            ref={refContainer}
            className="p-2 m-3 bg-red-200 border-black  border-4 rounded-2xl "
          />
        </div>
        <div className="ml-28 mr-auto">
          <button className="w-32  m-auto bg-pink-100 border-black border-4 rounded-lg mt-5 mb-5">
            {" "}
            Submit{" "}
          </button>
        </div>
      </form>
    </div>
  );
};

export default Refhook;
