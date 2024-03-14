import React from "react";
import ReactMarkdown from "react-markdown";
import { useState, useEffect } from "react";
import { useFetch } from "./My Projects/Pagintion/Components/useFetch";
import Followers from "./My Projects/Pagintion/Components/Followers";
function App() {
  const { loading, data } = useFetch();
  console.log(data);
  const [page, setPage] = useState(0);
  const [followers, setFollowers] = useState([]);
  const handlePage = (index) => {
    setPage(index);
  };
  useEffect(() => {
    if (loading) return;

    setFollowers(data[page]);
  }, [loading, page]);
  const handlePrevPage = () => {
    console.log("Pervious");
    setPage((oldPage) => {
      let prevPage = oldPage - 1;
      if (prevPage < 0) {
        prevPage = data.length - 1;
      }
      return prevPage;
    });
  };

  const handleNextPage = () => {
    console.log("Next Page");
    setPage((oldPage) => {
      let nextPage = oldPage + 1;
      if (nextPage > data.length - 1) {
        nextPage = 0;
      }
      return nextPage;
    });
  };
  return (
    <>
      <main>
        <h1>{loading ? "Loading..." : "Pagination"}</h1>
      </main>
      <section>
        <div className="grid grid-cols-4 gap-4">
          {Array.isArray(followers) &&
            followers.map((follower) => {
              return <Followers key={follower.id} {...follower} />;
            })}
        </div>
      </section>
      {!loading && (
        <div className="text-center">
          <button
            className="bg-red-400 px-1 m-1 mr-2 font-bold"
            onClick={() => handlePrevPage(page)}
          >
            Prev
          </button>{" "}
          {data.map((item, index) => {
            return (
              <span>
                <button
                  key={index}
                  className={
                    index === page
                      ? "bg-black text-white   px-1 m-1 mr-2 font-bold"
                      : "bg-blue-400 px-1 m-1 mr-2 font-bold"
                  }
                  onClick={() => {
                    handlePage(index);
                  }}
                >
                  {index + 1}
                </button>
                {/* <button className="bg-blue-300 px-1 m-1 mr-2 font-bold">
                  Prev
                </button> */}
              </span>
            );
          })}
          <button
            className="bg-red-400 px-1 m-1 mr-2 font-bold"
            onClick={() => handleNextPage()}
          >
            Next
          </button>{" "}
        </div>
      )}
      {/* <button
        className="bg-red-400 px-1 m-1 mr-2 font-bold"
        onClick={() => handlePrev()}
      >
        Prev
      </button>{" "} */}
    </>
  );
}
export default App;
