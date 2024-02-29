import React from "react";
import Tour from "./Tour";
const Tours = ({ tours, removeTour }) => {
  return (
    <section>
      <div className="title">
        <h2 className=" mt-10 text-3xl font-bold text-center text-blue-700">
          Our Tours
        </h2>
        <h2 className=" mb-2 text-3xl font-bold text-center text-blue-700">
          ----------------
        </h2>
        <div className="underline"></div>
      </div>
      <div>
        {tours.map((tour) => {
          return <Tour key={tour.id} {...tour} removeTour={removeTour} />;
        })}
      </div>
    </section>
  );
};

export default Tours;
