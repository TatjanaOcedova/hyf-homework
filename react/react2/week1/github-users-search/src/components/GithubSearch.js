import React, { useState, createContext } from "react";
import "../App.css";
import { GithubUser } from "./GithubUser";

export const userContext = createContext(null);

export function GithubSearch() {
  const [inputName, setInputName] = useState("");

  const onChangeHandler = (e) => {
    setInputName(e.target.value);
  };

  return (
    <>
      <input
        type="text"
        placeholder="Search for a user..."
        value={inputName}
        onChange={onChangeHandler}
      />
      <userContext.Provider value={inputName}>
        <GithubUser inputValue={inputName} />
      </userContext.Provider>
      {inputName.length === 0 && <p>No results</p>}
    </>
  );
}
