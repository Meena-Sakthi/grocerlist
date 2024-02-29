import React, { useState } from "react";

const Tour = ({ id, image, info, name, price, removeTour }) => {
  const [readMore, setReadMore] = useState(false);

  return (
    <div className="flex flex-column w-1/3 m-auto  mb-5">
      <article className=" md-1/3 border-black border-4  rounded-r-2xl  text-center   ">
        <div className="relative ">
          <img src={image} alt="Your Image" />
          <div className="absolute top-0 right-30 bg-black text-white px-2 py-1 rounded-bl-lg">
            ${price}
          </div>
        </div>
        {/* <img className="w-96 h-96 p-3 m-5" src={image} alt={name} />
      <footer>
        <div className="tour-info">
          <h4>{name}</h4>
          <h4 className="tour-price">${price}</h4>
        </div> */}
        <p>
          {readMore ? info : `${info.substring(0, 200)}...`}
          <button
            className="bg-slate-800 text-white font-bold p-2 m-2 rounded-md"
            onClick={() => setReadMore(!readMore)}
          >
            {readMore ? "Show less" : "  Read more"}
          </button>
        </p>
        <button
          className="bg-green-300 p-2 m-2 font-bold rounded-md"
          onClick={() => removeTour(id)}
        >
          Not Interested
        </button>
        {/* </footer> */}
      </article>
    </div>
  );
};

export default Tour;
