import React from "react";
import { useState } from "react";
// import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

import { FaChevronLeft, FaChevronRight, FaQuoteRight } from "react-icons/fa";
import { people } from "./data";
const Reviews = () => {
  const [index, setIndex] = useState(0);
  const { name, job, image, text } = people[index];
  console.log(name, job, text);
  const checkNumber = (number) => {
    if (number > people.length - 1) {
      return 0;
    }
    if (number < 0) {
      return people.length - 1;
    }
    return number;
  };
  const nextPerson = () => {
    setIndex((index) => {
      let newIndex = index + 1;
      return checkNumber(newIndex);
    });
  };
  const prevPerson = () => {
    setIndex((index) => {
      let newIndex = index - 1;
      return checkNumber(newIndex);
    });
  };

  const randomPerson = () => {
    let randomNumber = Math.floor(Math.random() * people.length);
    if (randomNumber === index) {
      randomNumber = index + 1;
      setIndex(checkNumber(randomNumber));
    }
  };
  return (
    <article>
      <div className="  flex items-center justify-center h-screen">
        <div className="w-96 h-[110] border-purple-300 border-4 rounded-lg shadow-lg">
          <h1 className="text-2xl font-bold text-center">{name}</h1>
          <div className="">
            <img
              src={image}
              alt={name}
              className="w-36 h-36 rounded-full m-auto  border-4 border-purple-700"
            />
            <span>
              <FaQuoteRight className="w-6 h-6 bg-purple-100 rounded-full relative" />
            </span>
          </div>
          <p className="font-bold  p-1 m-3 text-center text-xl">{job}</p>
          <p className="font-bold text-sm p-1 m-3">{text}</p>

          <div className=" flex justify-between">
            <button>
              <FaChevronLeft
                className="w-20 h-20  text-purple-800"
                onClick={() => {
                  prevPerson();
                }}
              />
            </button>
            <button
              className="p-5 m-5  w-30     flex justify-center rounded-full bg-purple-600 text-black text-2xl"
              onClick={() => {
                randomPerson();
              }}
            >
              Surprise
            </button>{" "}
            <button>
              <FaChevronRight
                className="w-20 h-20 text-purple-800"
                onClick={() => {
                  nextPerson();
                }}
              />
            </button>
          </div>
        </div>
      </div>
    </article>
  );
};

export default Reviews;
