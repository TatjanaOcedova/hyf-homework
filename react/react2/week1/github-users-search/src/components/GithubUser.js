import React, { useState, useEffect, useContext } from "react";
import { userContext } from "./GithubSearch";

export function GithubUser() {
  const [username, setUsername] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const inputValue = useContext(userContext);

  useEffect(() => {
    if (inputValue !== "") {
      setLoading(true);
      setError(null);
      fetch(`https://api.github.com/search/users?q=${inputValue}`)
        .then((response) => {
          if (!response.ok) {
            //doesn't remove
            throw Error("Something went wrong");
          } else {
            return response.json();
          }
        })
        .then((data) => {
          setUsername(data.items);
          setLoading(false);
        })
        .catch((error) => {
          setError(error.message);
        });
    }
  }, [inputValue]);

  const usersNames = username.map((user) => (
    <li key={user.id}>{user.login}</li>
  ));

  return (
    <>
      {error}
      {loading ? <p>loading</p> : <ul>{usersNames}</ul>}
    </>
  );
}
