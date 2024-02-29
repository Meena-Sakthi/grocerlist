import React from "react";
import { useState } from "react";

const BirthdayList = ({ people }) => {
  const [persons, setPersons] = useState(people);
  const [count, setCount] = useState(people.length);
  const handleRemove = (id) => {
    let newPersons = persons.filter((person) => person.id !== id);

    setPersons(newPersons);
    setCount(newPersons.length - 1);
    console.log("length count.....", count);
  };

  return (
    <div>
      {count === 0 ? (
        <h2>No Birthdays</h2>
      ) : (
        persons.map((person) => {
          const { id, name, age, image } = person;
          return (
            // <>
            //  <h3>{persons.length-1} Birthdays Today</h3>

            <div
              key={id}
              className="w-1/2 bg-slate-100 border border-zinc-700 shadow-lg mb-4 m-auto rounded-xl"
            >
              {/* <h3>{persons.length} Birthdays Today</h3> */}
              <div className="flex items-center p-4 ml-auto">
                <img
                  className="w-16 h-16 rounded-full mr-auto"
                  src={image}
                  alt={name}
                />
                <div className=" ">
                  <div>
                    <h4 className="font-bold">{name}</h4>
                    <p>{age} years old</p>
                  </div>
                </div>
              </div>
              <button
                className="w-full p-2 bg-blue-500 text-white"
                onClick={() => handleRemove(id)}
              >
                Remove
              </button>
            </div>
          );
        })
      )}
    </div>
    //  </>
  );
};

export default BirthdayList;
