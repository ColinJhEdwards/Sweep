import React, { useState } from "react";
import Movie from "../components/Movie";

const Home = () => {
  const [search, setSearch] = useState("fargo");
  return (
    <div>
      <Movie search={search} />
    </div>
  );
};

export default Home;
