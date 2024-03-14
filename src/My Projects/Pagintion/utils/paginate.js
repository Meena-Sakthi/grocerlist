import React from "react";

const paginate = (followers) => {
  let itemsPerPage = 9;
  const pages = Math.ceil(followers.length / itemsPerPage);
  const newFollowers = Array.from({ length: pages }, (_, index) => {
    const start = index * itemsPerPage;
    return followers.slice(start, start + itemsPerPage);

    // console.log("START.......", start);
  });
  return newFollowers;
  // console.log(newFollowers);
  // return <div>Pagination</div>;
};

export default paginate;
