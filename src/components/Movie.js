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
  console.log(movie.Poster);

  return (
    <MovieStyle>
      <h2>{movie.Title}</h2>
      <img src={movie.Poster === "N/A" ? filler : movie.Poster} alt="poster" />
    </MovieStyle>
  );
};

const MovieStyle = styled(motion.div)``;

export default Movie;
