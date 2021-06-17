import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { loadMovie } from "../actions/moviesAction";

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
    <div>
      <h2>{movie.Title}</h2>
      <img src={movie.Poster} alt="poster" />
    </div>
  );
};

export default Movie;
