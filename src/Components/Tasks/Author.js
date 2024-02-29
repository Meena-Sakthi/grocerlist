import React from "react";

const Author = ({ id, author, aboutAuthor }) => {
  return (
    <div className="w-80 h-2/4 border-4 border-teal-300 rounded-lg p-2 ">
      <h1 className="text-white text-xs font-bold">About {author}</h1>
      <h2 className="text-white text-xs font-bold">{aboutAuthor}</h2>
    </div>
  );
};

export default Author;
