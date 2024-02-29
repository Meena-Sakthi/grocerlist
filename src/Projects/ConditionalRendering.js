import React from "react";
import { useState, useEffect } from "react";
const url = "https://api.github.com/users/QuincyLarson";
const ConditionalRendering = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setError] = useState(false);
  const [user, setUser] = useState("");
  useEffect(() => {
    fetch(url)
      .then((resp) => {
        if (resp.ok) {
          return;
          resp.json();
        } else {
          setIsLoading(false);
          setError(true);
          throw new Error(resp.statusText);
        }
      })
      .then((user) => {
        const { login } = user;

        setUser(user);
        setIsLoading(false);
      })
      .catch((err) => console.log(err));
  }, []);
  if (isLoading) {
    return (
      <div>
        <h1>Loading....</h1>
      </div>
    );
  }
  // if (isError) {
  //   return (
  //     <div>
  //       <h2>Error....</h2>
  //     </div>
  //   );
  // }

  return (
    <div>
      <h2>Multiple conditonal rendering</h2>
      <h2>{user.login}</h2>
    </div>
  );
};

export default ConditionalRendering;
