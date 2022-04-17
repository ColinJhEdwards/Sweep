import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
//redux
import { useDispatch } from "react-redux";
import { loadMovieDetail } from "../actions/MovieDetailAction";
import { loadMovie } from "../actions/moviesAction";
//lazy load
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

const MovieCard = ({ title, imagePath, release, id }) => {
  const dispatch = useDispatch();
  const loadMovieDetailHandler = (id, title) => {
    dispatch(loadMovieDetail(id));
    dispatch(loadMovie(title));
  };

  return (
    <Link to={`/movie/${id}`} onClick={() => loadMovieDetailHandler(id, title)}>
      <StyledCard>
        <div className="hide">
          <LazyLoadImage
            src={`https://image.tmdb.org/t/p/original${imagePath}`}
            alt="poster"
            effect="blur"
          />
        </div>
        <h2>{title}</h2>
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
  border-radius: 10px;
  padding: 0rem;
  position: relative;
  transition: all ease 0.3s;
  cursor: pointer;
  &:hover {
    transform: translateY(-10px);
  }
  .hide {
    overflow: hidden;
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
    width: 100%;
    box-shadow: 0px 0px 20px rgb(0, 0, 0);
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
  }
  @media (max-width: 1495px) {
    margin: 1rem;
    width: 300px;
  }
`;

export default MovieCard;
