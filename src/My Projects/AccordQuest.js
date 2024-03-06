import React, { useState } from "react";

const AccordQuest = ({ id, title, info }) => {
  const [answer, showAnswer] = useState(false);
  const handleClick = () => {
    showAnswer(true);
  };
  return (
    <div>
      <div>
        <span>
          <h1>
            {title}
            <button onClick={() => handleClick()}>
              {!answer ? "✅" : "X"}
            </button>
          </h1>
        </span>
        {answer && <h1>{info}</h1>}
      </div>
    </div>
  );
};

export default AccordQuest;
