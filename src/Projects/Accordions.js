import React, { useState } from "react";
import questions from "./accordionData";
import SingleQuestion from "./Question";
const Accordions = () => {
  // const [questions, setQuestions] = useState(questions);

  return (
    <main>
      <div className="w-90 mx-auto bg-white rounded-x1 p-10 max-w-10 grid gap-4">
        <h3 className="font-bold text-2xl">Questions & Answers about Login</h3>
        <section className=""></section>
      </div>
    </main>
  );
};

export default Accordions;
