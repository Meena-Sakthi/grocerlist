import React from "react";
import { useState, useEffect } from "react";

const Tours = () => {
  const [tours, setTours] = useState([]);
  const [readMore, setReadMore] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [info, setInfo] = useState("");
  const url = "https://course-api.com/react-tours-project";
  const fetchTours = async () => {
    const tour = await fetch(url);
    const tours = await tour.json();
    setTours(tours);
    console.log("Tours..........", tours);
    // console.log(tourData);
  };
  const removeTour = (id) => {
    const newTours = tours.filter((tour) => tour.id != id);
    setTours(newTours);
  };
  useEffect(() => {
    fetchTours();
  }, []);
  if (tours.length === 0) {
    return (
      <div>
        <h1 className="text-center font-bold text-2xl text-orange-900">
          No Tours Left....
        </h1>
      </div>
    );
  }
  return (
    <div>
      <h1 className="text-center font-bold text-2xl text-orange-900">
        My Tours
      </h1>
      <h1 className="text-center font-bold text-2xl text-orange-900">
        ----------
      </h1>

      <section>
        {tours.map((tour) => {
          const { id, name, info, image, price } = tour;
          return (
            <>
              <div
                key={id}
                className="w-1/4 p-3 m-auto border-4 border-red-400 rounded-xl shadow-xl mb-5"
              >
                <h1 className="text-center text-xl text-bold text-orange-700">
                  {name}
                </h1>
                <div className="relative">
                  <img src={image} alt={name} className="mb-3 rounded-xl" />
                  <span className="absolute top-0 right-0 bg-black text-white px-2 py-1 rounded-tr-xl">
                    ${price}
                  </span>
                </div>
                <div className="">
                  <h3 className="">
                    {" "}
                    {readMore ? info : `${info.substring(0, 200)} ...  `}{" "}
                  </h3>
                  <div className="flex  justify-between">
                    <button
                      className=" justify-between p-1 m-2 bg-orange-200  border-4  border-orange-800 text-xl text-bold rounded-xl"
                      onClick={() => {
                        setReadMore(!readMore);
                        setInfo(info);
                      }}
                    >
                      {readMore ? "Show Less " : "Read More"}
                    </button>
                  </div>
                </div>
                <br />
                <div className=" text-center">
                  <button
                    onClick={() => {
                      removeTour(id);
                    }}
                    className="p-2  mt-5 border-4 bg-orange-200 border-orange-800 text-xl text-bold rounded-xl ml-auto mb-3"
                  >
                    Not Interested
                  </button>
                </div>
              </div>
            </>
          );
        })}
      </section>
    </div>
  );
};

export default Tours;
