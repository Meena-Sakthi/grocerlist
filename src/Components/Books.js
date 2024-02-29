import React from "react";

const Books = (props) => {
  const { image, title, author, type, rating, price } = props.book;
  const handleClick = (e) => {
    e.preventDefault();
    console.log("I am clicked");
  };
  return (
    <section className="flex px-2" key="index" onClick={handleClick}>
      <div className="border-4 border-gray-400 rounded-2xl">
        <img className="w-72 h-64 px-2 mb-1 pt-3" src={image} alt="image" />
        <h4 className=" px-2 mb-1 text-2xl font-bold text-pink-500">
          {" "}
          {title}
        </h4>
        <h4 className=" px-2 mb-1 text-xl font-bold text-orange-500">
          {" "}
          {author}
          <span className="text-sm text-slate-800">(Author)</span>
        </h4>
        <h4 className=" px-2 mb-1 text-xl font-bold text-orange-500">
          {" "}
          {type}
        </h4>
        <h4 className=" px-2 mb-1 text-xl font-bold text-orange-500">
          {" "}
          {rating}
        </h4>
        <h4 className=" px-2 mb-1 text-xl font-bold text-red-500 mb-2">
          {" "}
          {price}
        </h4>
      </div>
    </section>
  );
};

export default Books;
