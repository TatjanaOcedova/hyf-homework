import React from "react";
import { GithubSearch } from "./components/GithubSearch";

import { Title } from "./components/Title";

const App = () => {
  return (
    <div className="App">
      <Title />
      <GithubSearch />
    </div>
  );
};

export default App;
