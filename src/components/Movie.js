import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { loadMovie } from "../actions/moviesAction";
import styled from "styled-components";
import { motion } from "framer-motion";
import filler from "../images/filler.jpg";

const Movie = ({ search }) => {
  const dispatch = useDispatch();
  // fetch movie based off of search value
  useEffect(() => {
    dispatch(loadMovie(search));
  }, [search]);
  // get data from state
  const { movie } = useSelector((state) => state.movies);
  console.log(movie);

  return (
    <MovieStyle>
      <div>
        <h2>{movie.Title}</h2>
        <img
          src={movie.Poster === "N/A" ? filler : movie.Poster}
          alt="poster"
        />
        <div className="ratings">
          <p>IMDb Rating: {movie.imdbRating}/10</p>
        </div>
      </div>
      <div className="content">
        <div className="plot">
          <p>{movie.Plot}</p>
        </div>
        <div className="info">
          <p>Released: {movie.Released}</p>
          <p>Runtime: {movie.Runtime}</p>
          <p>Actors: {movie.Actors}</p>
          <p>Genre: {movie.Genre}</p>
          <p>Awards: {movie.Awards}</p>
          <p>Director(s): {movie.Director}</p>
          <p>Writer(s): {movie.Writer}</p>
        </div>
      </div>
    </MovieStyle>
  );
};

const MovieStyle = styled(motion.div)``;

export default Movie;
