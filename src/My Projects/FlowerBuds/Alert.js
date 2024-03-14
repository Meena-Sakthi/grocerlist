import React, { useEffect } from "react";

const Alert = ({ type, msg, removeAlert, list }) => {
  useEffect(() => {
    const timeout = setTimeout(() => {
      removeAlert();
    }, 3000);
    return () => clearTimeout(timeout);
  }, [list]);
  return (
    <div
      className={`p-2 m-2 ${
        type === "green" ? "bg-green-200" : "bg-red-200"
      } rounded-md`}
    >
      <p className="text-center">{msg}</p>
    </div>
  );
  // <div className="w-5/6 m-auto">
  //   {/* <h1>Hello</h1> */}
  //   <p className=" p-5 m-5 border-slate-300 bg-slate-100 rounded-lg shadow-lg">
  //     {msg}
  //   </p>
  // </div>
};

export default Alert;
