import React from "react";
import { useState } from "react";
import { FaAnglesRight } from "react-icons/fa6";
import { experiences } from "D:/web-live/webb/src/Components/Tasks/utils/constants.js";

const ProfileTabs = () => {
  const [selectedExperience, setSelectedExperience] = useState(experiences[0]);

  const handleClick = (place) => {
    setSelectedExperience(place);
  };

  return (
    <>
      <header>
        <div className="mt-5 text-2xl text-center  m-auto font-bold text-black rounded-xl">
          <h2 className="m-auto px-5 bg-white text-2xl  align-middle text-center w-32  font-bold rounded-xl hover:text-white">
            Experience
          </h2>
        </div>
      </header>

      <article>
        <div className="flex columns-2 text-center">
          <div className="p-10 text-2xl ml-24 mt-10  h-96 w-1/4 rounded-xl">
            {selectedExperience &&
              experiences.map((place) => (
                <div
                  className="mt-10 cursor-pointer text-center mb-10"
                  key={place.id}
                  onClick={() => {
                    handleClick(place);
                  }}
                >
                  <h1 className=" text-center font-bold  hover:bg-cyan-500 w-32 align-middle text-black rounded-xl cursor-pointer">
                    {place.workPlace}
                  </h1>
                </div>
              ))}
          </div>
          <div className=" p-1 m-10 w-3/4 h-96   bg-white border-4">
            <section>
              <div className=" font-bold text-xl hover: text-blue-900">
                <h2 className="text-left mb-2">{selectedExperience.role}</h2>
                <h1 className="m-2 px-2 p bg-cyan-500 text-lg  align-middle w-24 font-bold rounded-xl hover:text-white">
                  {selectedExperience.workPlace}
                </h1>
                <h3 className="text-left mb-2">
                  {selectedExperience.workPeriod}
                </h3>
              </div>
              <div>
                <ul>
                  {selectedExperience.description.map((detail, index) => (
                    <li className="mb-1" key={index}>
                      <span className="inline-flex items-center rounded-lg hover:text-cyan-600    text-md font-bold">
                        <FaAnglesRight className="mr-3  text-2xl" />
                        {detail}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <button className="m-2 px-2 bg-cyan-500 text-lg font-bold rounded-xl hover:text-white">
                  More Info
                </button>
              </div>
            </section>
          </div>
        </div>
      </article>
    </>
  );
};

export default ProfileTabs;
