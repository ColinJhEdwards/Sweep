import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { loadMovie } from "../actions/moviesAction";

const Movie = ({ search }) => {
  const dispatch = useDispatch();
  // fetch movie based off of search value
  useEffect(() => {
    dispatch(loadMovie(search));
  }, [dispatch]);
  // get data from state
  const { movie } = useSelector((state) => state.movies);
  console.log(movie);

  return <div></div>;
};

export default Movie;
