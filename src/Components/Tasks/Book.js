import React, { useState } from "react";
import Author from "./Author";

const Book = (props) => {
  const [showAuthor, setShowAuthor] = useState(false);
  const [showReview, setShowReview] = useState(false);
  const { id, image, title, author, aboutAuthor, rating, type, price } = props;
  console.log(props.aboutAuthor);
  return (
    <div>
      <section className="w-80 h-2/4 border-4 border-teal-300 rounded-lg p-2 mb-2 mt-5 ">
        <img
          src={image}
          className="w-full h-56 p-1 hover:translate-y-1"
          alt={title}
        />
        <div className="bg-black rounded-md hover:bg-slate-700 cursor-pointer">
          <p className="p-1 font-bold text-teal-500 font-l">{title}</p>
          <div>
            <p className="p-1 font-bold text-teal-500 text-sm">
              {author}{" "}
              <button
                className="text-white text-xs"
                onClick={() => setShowAuthor(!showAuthor)}
              >
                {!showAuthor ? "(More About Author)" : "(Author)"}
              </button>
            </p>
            {showAuthor && (
              <div className="text-white">
                <p className=" text-xs font-bold">
                  About<span className="text-red-700 text-xl"> {author}</span>
                </p>
                <p className=" text-xs font-bold">{aboutAuthor}</p>
              </div>
            )}
          </div>
          <p className="p-1 font-bold text-teal-500 text-sm">{rating}</p>
          <p className="p-1 font-bold text-teal-500 text-sm">{type}</p>
          <p className="p-1 font-bold text-teal-500 text-sm">${price}</p>
        </div>
      </section>
    </div>
  );
};

export default Book;
