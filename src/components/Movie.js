import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { loadMovie } from "../actions/moviesAction";
import styled from "styled-components";
import { motion } from "framer-motion";
import filler from "../images/filler.jpg";
import { grow } from "../animations";
import axios from "axios";

const Movie = ({ search }) => {
  const dispatch = useDispatch();
  // fetch movie based off of search value
  useEffect(() => {
    dispatch(loadMovie(search));
  }, [search]);
  // get data from state
  const { movie, trailer } = useSelector((state) => state.movies);
  console.log(movie);
  console.log("trailer", trailer);

  //Youtube stuff

  return (
    <MovieStyle variants={grow}>
      <div className="content">
        <h2>{movie.Title}</h2>
        <div className="test">
          <div className="picture">
            <img
              src={movie.Poster === "N/A" ? filler : movie.Poster}
              alt="poster"
            />
            <div className="ratings">
              <p>IMDb Rating: {movie.imdbRating}/10</p>
              <p>MetaScore: {movie.Metascore}</p>
            </div>
          </div>
          <div className="info">
            <p>Released: {movie.Released}</p>
            <p>Runtime: {movie.Runtime}</p>
            <p>Rated: {movie.Rated}</p>
            <p>Genre: {movie.Genre}</p>
          </div>
        </div>
      </div>
      <div className="plot">
        <p>{movie.Plot}</p>
      </div>
      <div>
        <p>Awards: {movie.Awards}</p>
        <p>Actors: {movie.Actors}</p>
        <p>Director(s): {movie.Director}</p>
        <p>Writer(s): {movie.Writer}</p>
      </div>
    </MovieStyle>
  );
};

const MovieStyle = styled(motion.div)`
  min-height: 90vh;
  width: 60%;
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  text-align: center;
  .ratings {
    display: flex;
    justify-content: center;
    p {
      margin: 0rem 1rem;
    }
  }
  .content {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    box-shadow: 0px 0px 20px rgb(0, 0, 0);
    padding: 2rem;
    border-radius: 15px;
    h2 {
      font-size: 3rem;
      margin-bottom: 2rem;
    }
    .test {
      display: flex;
      align-items: center;
      justify-content: space-around;
    }
    .picture {
      margin: 0rem 1rem;
      img {
        box-shadow: 0px 0px 20px rgb(0, 0, 0);
        border-radius: 10px;
      }
    }
    .info {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      margin: 0rem 1rem;
      p {
        margin: 2rem 0rem;
      }
    }
  }
  .plot {
    margin: 2rem 0rem;
    p {
      font-size: 1.5rem;
    }
  }
`;

export default Movie;
