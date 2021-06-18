import React, { useState } from "react";
import Movie from "../components/Movie";

const Home = () => {
  const [search, setSearch] = useState("");
  const [inp, setInp] = useState("");

  const handleInputChange = (e) => {
    setInp(e.target.value);
  };
  const handleSearchSubmit = (e) => {
    e.preventDefault();
    setSearch(inp);
    setInp("");
  };

  return (
    <div>
      <form>
        <input type="text" value={inp} onChange={handleInputChange} />
        <button onClick={handleSearchSubmit}>ClickME</button>
      </form>
      <Movie search={search} />
    </div>
  );
};

export default Home;
