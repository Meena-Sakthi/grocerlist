import React, { useState } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
const Quest = ({ title, info }) => {
  const [showInfo, setShowInfo] = useState(false);
  return (
    <div className="mt-5 w-1/2 text-center text-bold  text-2xl mx-auto bg-purple-100 rounded-lg p-10 max-w-fixed gap-y-4 gap-x-8 flex  justify-between border-4 border-purple-950 shadow-xl mb-5">
      <h4>{title}</h4>
      <button
        className="bg-purple-950   text-white w- 8 h-6 rounded-full"
        onClick={() => {
          setShowInfo(!showInfo);
          return (
            <>
              {" "}
              <br />
              <div>{info} </div>
            </>
          );
        }}
      >
        {showInfo ? <AiOutlineMinus /> : <AiOutlinePlus />}
      </button>
      {/* </div> */}

      {showInfo && <p>{info}</p>}
    </div>
  );
};

export default Quest;
