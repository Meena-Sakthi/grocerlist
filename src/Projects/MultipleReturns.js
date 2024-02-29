import React from "react";
import { useState, useEffect } from "react";
const url = "https://api.github.com/users/QuincyLarson";

const MultipleReturns = () => {
  return <div></div>;
};
export default MultipleReturns;
//   const [isLoading, setIsLoading] = useState(true);
//   const [user, setUser] = useState("default User");
//   const [isError, setIsError] = useState(false);
//   useEffect(() => {
//     fetch(url)
//       .then((resp) => {
//         if (resp.status >= 200 && resp.status <= 299) {
//           return resp.json();
//         } else {
//           setIsLoading(false);
//           setIsError(true);
//           throw new Error(resp.statusText);
//         }
//       })
//       .then((user) => {
//         const { login } = user;
//         setUser(user);
//         setIsLoading(false);
//       })

//       .catch((err) => console.log(err));
//   }, []);
//   if (isLoading) {
//     return (
//       <div>
//         <h1>Loading....</h1>
//       </div>
//     );
//   }
//   if (isError) {
//     return (
//       <div>
//         <h1>Error....</h1>
//       </div>
//     );
//   }
//   return <h2>Multiple MultipleReturns</h2>;
// };

// export default MultipleReturns;
