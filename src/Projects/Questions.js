import React, { useState } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

const Questions = (title, info) => {
  return (
    <article className="">
      <header>
        <h4>{title}</h4>
        <button className="w-10 h-10 bg-gray-300 border-transparent flex items-center justify-center rounded-full text-red-600 cursor-pointer ml-4 self-center min-w-10"></button>
      </header>
    </article>
  );
};

export default Questions;
