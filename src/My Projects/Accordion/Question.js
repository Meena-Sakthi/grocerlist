import React, { useState } from "react";
import data from "./data";
import SingleQuestion from "./Quest";

const Question = () => {
  const [questions, setQuestions] = useState(data);
  return (
    <main>
      <div className="w-1/2 text-center text-bold  text-2xl mx-auto bg-purple-950 text-white border-4 border-purple-100  rounded-lg p-10 max-w-fixed gap-y-4 gap-x-8 grid">
        <h3>Questions & Answers About Login</h3>
      </div>
      <section>
        {questions.map((question) => {
          return <SingleQuestion key={question.id} {...question} />;
        })}
      </section>
    </main>
  );
};

export default Question;
