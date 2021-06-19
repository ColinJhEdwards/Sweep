import React, { useState } from "react";
import Movie from "../components/Movie";
import styled from "styled-components";
import { motion } from "framer-motion";
import { pageAnimation } from "../animations";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const Search = () => {
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
    <StyledHome
      variants={pageAnimation}
      initial="hidden"
      animate="show"
      exit="exit"
    >
      <div className="form">
        <form>
          <input type="text" value={inp} onChange={handleInputChange} />
          <button onClick={handleSearchSubmit}>
            <FontAwesomeIcon icon={faSearch} />
          </button>
        </form>
      </div>
      {search && <Movie search={search} />}
    </StyledHome>
  );
};

const StyledHome = styled(motion.div)`
  min-height: 90vh;
  .form {
    min-height: 10vh;
    display: flex;
    justify-content: center;
    align-items: center;
    form {
      display: flex;
      justify-content: center;
      align-items: center;
    }
    input {
      font-size: 2rem;
      font-family: "Roboto", sans-serif;
    }
    button {
      background: #0b0ba5;
      border: none;
      color: white;
      cursor: pointer;
      padding: 0.7rem 1rem;
      margin-left: 1rem;
      transition: all ease 0.5s;
      &:hover {
        color: #0b0ba5;
        background: white;
      }
    }
  }
`;

export default Search;
