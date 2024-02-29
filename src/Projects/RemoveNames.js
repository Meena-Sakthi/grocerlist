import React, { useState } from "react";
import { data } from "../utils/constants";
/////////////////////////USESTATE ARRAY//////////////////////////////////////
const RemoveNames = () => {
  const [people, setPeople] = useState(data);
  const handleRemove = (id) => {
    let newPeople = people.filter((person) => person.id != id);
    setPeople(newPeople);
  };

  return (
    <>
      <h1 className=" mt-5 font-bold text-center">
        {" "}
        UseState Example to Remove Names
      </h1>
      {people.map((person) => {
        const { id, name } = person;
        return (
          <>
            <div key={id} className="flex justify-center   items-center mt-10">
              <div className="flex justify-between bg-slate-300 text-green-800 font-bold rounded-xl text-center w-1/2 -auto">
                <span className="p-2 m-2">{name}</span>
                <button
                  className="p-2 m-2 text-red-800"
                  onClick={() => {
                    handleRemove(id);
                  }}
                >
                  Remove
                </button>
              </div>
            </div>
          </>
        );
      })}
      <button
        className="flex justify-center bg-red-300 text-slate-900 font-bold rounded-xl text-center w-1/2 m-auto mt-10 p-5"
        onClick={() => setPeople([])}
      >
        Clear All
      </button>
    </>
  );
};

export default RemoveNames;
