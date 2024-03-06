import React from "react";
import { useState } from "react";
import questions from "./AccordData";
import QuestAccord from "./AccordQuest";
const Accord = () => {
  const [question, setQuestion] = useState(true);
  const [answer, showAnswer] = useState(questions[0].info);
  const handleClick = ({ Quest, myid }) => {
    setQuestion(true);

    showAnswer(true);
  };
  return (
    <div clasName="text center">
      <section>
        <article className="flex col-2 text center p-5 m-10">
          <div className="mr-20">Questions & Answers</div>
          <div>
            <section>
              {questions &&
                questions.map((qn) => <QuestAccord key={qn.id} {...qn} />)}
            </section>
          </div>
        </article>
      </section>
    </div>
  );
};

export default Accord;
