import React, { useEffect } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { pageAnimation } from "../animations";
import MovieCard from "../components/MovieCard";
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

  const { popular, nowPlaying, topRated } = useSelector(
    (state) => state.movieList
  );
  console.log(popular);

  return (
    <StyledHome
      variants={pageAnimation}
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
          Popular <FontAwesomeIcon className="icon" icon={faStar} />
        </h2>
        <div className="list">
          {popular.map((movie) => (
            <MovieCard
              title={movie.title}
              imagePath={movie.poster_path}
              release={movie.release_date}
              key={movie.id}
              id={movie.id}
            />
          ))}
        </div>
        <Line></Line>
        <h2 className="type">
          Now Playing <FontAwesomeIcon className="icon" icon={faTicketAlt} />
        </h2>
        <div className="list">
          {nowPlaying.map((movie) => (
            <MovieCard
              title={movie.title}
              imagePath={movie.poster_path}
              release={movie.release_date}
              key={movie.id}
              id={movie.id}
            />
          ))}
        </div>
        <Line></Line>
        <h2 className="type">
          Top Rated <FontAwesomeIcon className="icon" icon={faCrown} />
        </h2>
        <div className="list">
          {topRated.map((movie) => (
            <MovieCard
              title={movie.title}
              imagePath={movie.poster_path}
              release={movie.release_date}
              key={movie.id}
              id={movie.id}
            />
          ))}
        </div>
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
`;

const Line = styled.div`
  width: 70%;
  height: 2px;
  margin: 2rem auto 2rem auto;
  border-radius: 20px;
  background: #c07d00;
`;

export default Home;
