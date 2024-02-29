import React from "react";
import { experience } from "D:/web-live/webb/src/Components/Tasks/utils/constants.js";
const ProfileTabs = () => {
  return (
    <>
      <header>
        <div className="text-2xl text-center font-bold text-red-500">
          <h2>Experience</h2>
          <div className="h-2 w-32 m-auto  bg-red-500 rounded-md"></div>
        </div>
      </header>
      <article>
        <div className="flex columns-2 text-center">
          <div className="p-10  mr-2 m-10   h-96 w-1/4 border-black border-4 ">
            Col-1
          </div>
          <div className=" p-10  m-10 w-3/4 h-96 border-black border-4">
            Col-4
          </div>
        </div>
      </article>
    </>
  );
};

export default ProfileTabs;
