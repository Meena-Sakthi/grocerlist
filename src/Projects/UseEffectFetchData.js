import React from "react";
import { useState, useEffect } from "react";

const UseEffectFetchData = () => {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const url = "https://api.github.com/users";
  const fetchData = async () => {
    const data = await fetch(url);
    const json = await data.json();
    console.log(json);
    setUsers(json);
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <h1 className="p-5 m-5 text-center font-bold">GitHub Users</h1>
      <div className="flex flex-wrap justify-center">
        {users.map((user) => {
          const { id, login, avatar_url, html_url } = user;
          return (
            <div
              key={id}
              className="m-5 max-w-xs rounded overflow-hidden shadow-lg"
            >
              <img
                className="w-1/2 rounded-full"
                src={avatar_url}
                alt={login}
              />
              <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{login}</div>
                <div className="flex justify-end">
                  <a href={html_url} className="text-blue-500">
                    Profile
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};
//     <>
//       <h1 className="p-5 m-5 text-center font-bold">GitHub Users</h1>
//       <ul className="flex flex-wrap justify-center">
//         {users.map((user) => {
//           const { id, login, avatar_url, html_url } = user;
//           return (
//             <li
//               key={id}
//               className="m-5 max-w-xs rounded overflow-hidden shadow-lg"
//             >
//               <img className="w-full" src={avatar_url} alt={login} />
//               <div className="px-6 py-4">
//                 <div className="font-bold text-xl mb-2">{login}</div>
//                 <a href={html_url} className="text-blue-500">
//                   Profile
//                 </a>
//               </div>
//             </li>
//           );
//         })}
//       </ul>
//     </>
//   );
// };

//     <>
//       <div className="flex">
//         <h1 className="p-5 m-5 text-center font-bold">GitHub Users</h1>
//         <ul className="">
//           {users.map((user) => {
//             const { id, login, avatar_url, html_url } = user;
//             return (
//               <div className="flex ">
//                 <div className="w-1/3 justify-between bg-orange-500">
//                   <li key={id}>
//                     <img src={avatar_url} alt={login} />
//                     <div>
//                       <h4>{login}</h4>
//                       <a href={html_url}>Profile</a>
//                     </div>
//                   </li>
//                 </div>
//               </div>
//             );
//           })}
//         </ul>
//       </div>
//     </>
//   );
// };

export default UseEffectFetchData;
