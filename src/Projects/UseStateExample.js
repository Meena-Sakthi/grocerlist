import React from "react";

const UseStateExample = () => {
  const [title, setTitle] = React.useState("My Title");
  const handleChange = () => {
    if (title === "My Title") setTitle("Changed Title");
    else setTitle("My Title");
  };
  return (
    <div>
      <h1 className="p-5 m-5 text-center font-bold"> {title}</h1>
      <div className="flex justify-center items-center mt-10">
        <button
          className="p-5 flex font-bold bg-amber-200 text-center "
          onClick={() => handleChange()}
        >
          Change Title
        </button>
      </div>
    </div>
  );
};

export default UseStateExample;
