import React, { useState } from "react";
import Movie from "../components/Movie";

const Home = () => {
  const [search, setSearch] = useState("");
  const [inp, setInp] = useState("");

  const handleInputChange = (e) => {
    setInp(e.target.value);
  };
  const handleSearchSubmit = () => {
    setSearch(inp);
  };

  return (
    <div>
      <input type="text" onChange={handleInputChange} />
      <button onClick={handleSearchSubmit}>ClickME</button>
      <Movie search={search} />
    </div>
  );
};

export default Home;
