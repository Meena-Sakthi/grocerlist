// import React from "react";
// import { useState, useEffect } from "react";
// import Loading from "./Loading";
// import Tours from "./Tours";
// const url = "https://course-api.com/react-tours-project";

// const MyTours = () => {
//   const [tours, setTours] = useState([]);
//   const [isLoading, setIsLoading] = useState(true);
//   // const [isError, setIsError] = useState(false);
//   // const fetchTours = async () => {
//   //   setIsLoading(true);
//   //   const response = await fetch(url);
//   //   const data = await response.json();
//   //   console.log(data);
//   //   setTours(data);
//   //   setIsLoading(false);
//   // };
//   //using try-catch

//   const fetchTours = async () => {
//     setIsLoading(true);
//     try {
//       const response = await fetch(url);
//       const tours = await response.json();
//       // setIsLoading(false);
//       setTours(tours);
//       console.log(tours);
//       <Tours />;
//     } catch (error) {
//       setIsLoading(false);
//       console.log(error);
//     }
//   };
//   useEffect(() => {
//     fetchTours();
//   }, []);
//   if (isLoading) {
//     return (
//       <main>
//         <Loading />
//       </main>
//     );
//   }

//   return (
//     <main>
//       <Tours tours={tours} />
//     </main>
//   );
// };

// export default MyTours;
import React, { useState, useEffect } from "react";
import Loading from "./Loading";
import Tours from "./Tours";

const url = "https://course-api.com/react-tours-project";

function MyTours() {
  const [loading, setLoading] = useState(true);
  const [tours, setTours] = useState([]);

  const removeTour = (id) => {
    const newTours = tours.filter((tour) => tour.id !== id);
    setTours(newTours);
  };

  const fetchTours = async () => {
    setLoading(true);
    try {
      const response = await fetch(url);
      const tours = await response.json();
      setLoading(false);
      setTours(tours);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };
  useEffect(() => {
    fetchTours();
  }, []);
  if (loading) {
    return (
      <main>
        <Loading />
      </main>
    );
  }
  if (tours.length === 0) {
    return (
      <main>
        <div className="title">
          <h2 className=" mt-10 text-3xl font-bold text-center text-blue-700">
            No tours left
          </h2>
          <button
            className=" mt-10 text-3xl font-bold ml-auto text-blue-700 bg-black rounded-lg p-3 "
            onClick={() => fetchTours()}
          >
            Refresh
          </button>
        </div>
      </main>
    );
  }
  return (
    <main>
      <Tours tours={tours} removeTour={removeTour} />
    </main>
  );
}
export default MyTours;
