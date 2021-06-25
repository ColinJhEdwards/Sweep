import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { fade } from "../animations";
import { pageAnimation2 } from "../animations";
import MovieCard from "../components/MovieCard";
import Test from "./test";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faStar,
  faTicketAlt,
  faCrown,
} from "@fortawesome/free-solid-svg-icons";
import omdbCred from "../images/omdbCred.png";
//redux stuff
import { useSelector, useDispatch } from "react-redux";
import { loadMovieList } from "../actions/movieListAction";

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadMovieList());
  }, [dispatch]);

  const { popular, nowPlaying, topRated, isLoading } = useSelector(
    (state) => state.movieList
  );

  console.log(isLoading);

  return (
    <StyledHome
      variants={pageAnimation2}
      initial="hidden"
      animate="show"
      exit="exit"
    >
      <div className="omdb">
        <img src={omdbCred} alt="logo" />
      </div>
      <div className="welcome">
        <h2>Sweep</h2>
        <p>Discover your next favorite movie.</p>
      </div>
      <Line></Line>

      <div className="movies">
        <h2 className="type">
          <FontAwesomeIcon className="icon" icon={faStar} /> Popular{" "}
          <FontAwesomeIcon className="icon" icon={faStar} />
        </h2>
        <div className="list">
          {popular.map((movie) => (
            <motion.div variants={fade}>
              <MovieCard
                title={movie.title}
                imagePath={movie.poster_path}
                release={movie.release_date}
                key={movie.id}
                id={movie.id}
              />
            </motion.div>
          ))}
        </div>
        <Line></Line>
        <h2 className="type">
          <FontAwesomeIcon className="icon" icon={faTicketAlt} /> Now Playing{" "}
          <FontAwesomeIcon className="icon" icon={faTicketAlt} />
        </h2>
        <motion.div variants={fade} className="list">
          {nowPlaying.map((movie) => (
            <MovieCard
              title={movie.title}
              imagePath={movie.poster_path}
              release={movie.release_date}
              key={movie.id}
              id={movie.id}
            />
          ))}
        </motion.div>
        <Line></Line>
        <h2 className="type">
          <FontAwesomeIcon className="icon" icon={faCrown} /> Top Rated{" "}
          <FontAwesomeIcon className="icon" icon={faCrown} />
        </h2>
        <motion.div variants={fade} className="list">
          {topRated.map((movie) => (
            <MovieCard
              title={movie.title}
              imagePath={movie.poster_path}
              release={movie.release_date}
              key={movie.id}
              id={movie.id}
            />
          ))}
        </motion.div>
        <Line></Line>
      </div>
    </StyledHome>
  );
};

const StyledHome = styled(motion.div)`
  min-height: 90vh;
  width: 90%;
  margin: auto;
  position: relative;
  *::-webkit-scrollbar {
    width: 5px;
  }

  *::-webkit-scrollbar-track {
    background: transparent;
  }

  *::-webkit-scrollbar-thumb {
    background-color: rgba(155, 155, 155, 0.5);
    border-radius: 20px;
    border: transparent;
  }
  .omdb {
    position: absolute;
    top: 0;
    left: 0;
    img {
      width: 100px;
    }
  }
  .welcome {
    text-align: center;
    margin: 1rem 0rem;
    p {
      opacity: 0.7;
    }
  }
  .type {
    margin: 1rem 0rem;
    font-size: 3rem;
  }

  .list {
    min-height: 80vh;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    grid-column-gap: 3rem;
    grid-row-gap: 5rem;
  }
  .icon {
    color: blue;
  }
  @media (max-width: 1495px) {
    .list {
      min-height: 0vh;
      display: flex;
      overflow-x: scroll;
    }
  }
  @media (max-width: 414px) {
    .omdb {
      img {
        width: 50px;
      }
    }
    .type {
      text-align: center;
    }
  }
  @media (max-width: 375px) {
    .type {
      font-size: 2rem;
    }
  }
`;

const Line = styled.div`
  width: 70%;
  height: 2px;
  margin: 2rem auto 2rem auto;
  border-radius: 20px;
  background: #c07d00;
`;

export default Home;
