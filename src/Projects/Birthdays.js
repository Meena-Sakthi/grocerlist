import React from "react";
import { useState, useEffect } from "react";
import data from "../utils/data";
import BirthdayList from "./BirthdayList";
const Birthdays = () => {
  const [people, setPeople] = useState(data);
  return (
    <div>
      <section className="w-50   text-center   text-3xl font-bold bg-teal-300 h-50 p-5 m-auto border bg-grey-100 shadow-lg rounded-lg">
        {/* <h3>{people.length} Birthdays Today</h3> */}
        <BirthdayList people={people} />
      </section>
    </div>
  );
};

export default Birthdays;
