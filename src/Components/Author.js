import React from "react";

const Author = (id, author, aboutAuthor) => {
  return (
    <div className="w-full h-full m-3 p-3 border-4 border-teal-400 text-xl font-bold">
      <h1>About {author}</h1>
      <p>{aboutAuthor}</p>
    </div>
  );
};

export default Author;
