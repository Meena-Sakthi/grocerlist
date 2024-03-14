import React from "react";

const Followers = ({ avatar_url, login, html_url }) => {
  return (
    <div className="flex items-center">
      <article className=" text-center  mx-auto grid w-96  ">
        <div className="mx-auto mt-20 bg-gray-100 rounded shadow-lg w-64  h-64 p-3 m-2  pb-5">
          <img
            src={avatar_url}
            alt={login}
            className="h-36 w-36 rounded-full m-auto  "
          />
          <br />
          <h4>{login}</h4>
          <br />
          <a
            href={html_url}
            className="text-center bg-blue-500 rounded-lg px-2 mx-2 mb-2"
          >
            View Profile
          </a>
        </div>
      </article>
      {/* <section>
        <h1>Hellooo</h1>
      </section> */}
    </div>
  );
};

export default Followers;

//////////////////////////////
// import React from "react";

// const Followers = ({ avatar_url, html_url, login }) => {
//   return (
//     <article className="card">
//       <img src={avatar_url} alt={login} />
//       <h4>${login}</h4>
//       <a href={html_url} className="btn">
//         view profile
//       </a>
//     </article>
//   );
// };

// export default Followers;
