import React from "react";
import { useState } from "react";
import { experiences } from "D:/web-live/webb/src/Components/Tasks/utils/constants";
// import { experiences } from "D:/web-live/webb/src/utils/constants";
// D:\web-live\webb\src\Components\Tasks\utils\constants.js

// D:\web-live\webb\src\utils\constants.js
const Tabs = () => {
  const [showExperience, setShowExperience] = useState(experiences[0]);
  console.log(showExperience);
  const handleClick = (place) => {
    setShowExperience(place);
  };
  return (
    <div>
      <section>
        <h1>Experiences</h1>
      </section>
      <article className="flex columns-2 ">
        <div>
          <section>
            {showExperience &&
              experiences.map((exp) => (
                <div key={exp.id} onClick={() => handleClick(exp)}>
                  <h1>{exp.workPlace}</h1>
                </div>
              ))}
          </section>
        </div>

        {/* {setShowExperience &&
          experiences.map((place) => (
            <div
              className="mt-10 cursor-pointer text-center mb-10 flex"
              key={place.id}
              onClick={() => {
                handleClick(place);
              }}
            >
              <h1 className="  flex-row text-center font-bold  hover:bg-cyan-500 w-32 align-middle text-black rounded-xl cursor-pointer">
                {place.workPlace}
              </h1>
            </div>
          ))} */}
        {/* <div>
          {Array.isArray(showExperience) &&
            showExperience.map((exp) => (
              <div key={exp.workPlace} onClick={() => handleClick(exp)}>
                <h1>{exp.workPlace}</h1>
              </div>
            ))}
        </div> */}

        {/* <div>
          {Array.isArray(showExperience) &&
            showExperience.map((exp, index) => (
              <div key={index} onClick={() => handleClick(exp)}>
                <h1>{exp.workPlace}</h1>
              </div>
            ))}
        </div> */}
        <div>
          <h1>{showExperience.workPlace}</h1>
          <h1>{showExperience.workPeriod}</h1>
          <h1>{showExperience.description}</h1>
        </div>
      </article>
    </div>
  );
};

export default Tabs;
