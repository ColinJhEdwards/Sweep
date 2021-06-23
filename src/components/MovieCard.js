import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { shortFade } from "../animations";
import { Link } from "react-router-dom";
//redux
import { useDispatch } from "react-redux";
import { loadMovieDetail } from "../actions/MovieDetailAction";
import { loadMovie } from "../actions/moviesAction";

const MovieCard = ({ title, imagePath, release, id }) => {
  const dispatch = useDispatch();
  const loadMovieDetailHandler = (id, title) => {
    dispatch(loadMovieDetail(id));
    dispatch(loadMovie(title));
  };

  return (
    <Link to={`/movie/${id}`} onClick={() => loadMovieDetailHandler(id, title)}>
      <StyledCard>
        <h2>{title}</h2>
        <img
          src={`https://image.tmdb.org/t/p/original${imagePath}`}
          alt="poster"
        />
        <p>{release}</p>
      </StyledCard>
    </Link>
  );
};

const StyledCard = styled(motion.div)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-shadow: 0px 0px 20px rgb(0, 0, 0);
  border-radius: 15px;
  padding: 1rem;
  transition: all ease 0.5s;
  cursor: pointer;
  &:hover {
    box-shadow: 0px 0px 20px rgb(4, 0, 218);
  }
  h2 {
    text-align: center;
    font-size: 1.1rem;
  }
  h2,
  p {
    margin: 1rem 0rem;
  }
  img {
    width: 200px;
    box-shadow: 0px 0px 20px rgb(0, 0, 0);
    border-radius: 10px;
  }
  @media (max-width: 1495px) {
    margin: 1rem;
    padding: 2rem;
  }
`;

export default MovieCard;
