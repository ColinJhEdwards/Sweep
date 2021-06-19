import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { loadMovie } from "../actions/moviesAction";
import styled from "styled-components";
import { motion } from "framer-motion";
import filler from "../images/filler.jpg";
import { grow } from "../animations";

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
  const videoSrc = `https://www.youtube.com/embed/${trailer}`;

  return (
    <MovieStyle variants={grow}>
      <div className="content">
        <h2>{movie.Title}</h2>
        <div className="test">
          <div className="video">
            <iframe src={videoSrc} frameborder="0"></iframe>
          </div>
          <div className="info">
            <p>Released: {movie.Released}</p>
            <p>Runtime: {movie.Runtime}</p>
            <p>Rated: {movie.Rated}</p>
            <p>Genre: {movie.Genre}</p>
          </div>
        </div>
      </div>
      <div className="wrap">
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
        <div className="plot">
          <p>{movie.Plot}</p>
        </div>
      </div>
      <div className="awards">
        <p>
          <span>Awards:</span> {movie.Awards}
        </p>
        <p>
          <span>Actors:</span> {movie.Actors}
        </p>
        <p>
          <span>Director(s):</span> {movie.Director}
        </p>
        <p>
          <span>Writer(s):</span> {movie.Writer}
        </p>
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
  span {
    color: #0000ff;
  }
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
    .video {
      iframe {
        height: 500px;
        width: 800px;
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
  .wrap {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .picture {
    margin: 2rem 1rem;
    img {
      box-shadow: 0px 0px 20px rgb(0, 0, 0);
      border-radius: 10px;
    }
  }
  .plot {
    margin: 2rem 0rem;

    p {
      font-size: 1.5rem;
    }
  }
  .awards {
    display: flex;
    margin: 2rem 0rem;
    font-size: 1.5rem;
    flex-wrap: wrap;
    p {
      margin: 1rem;
    }
  }
`;

export default Movie;
