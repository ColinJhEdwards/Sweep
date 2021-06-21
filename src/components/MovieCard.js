import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const MovieCard = ({ title, imagePath, release }) => {
  return (
    <StyledCard>
      <h2>{title}</h2>
      <img
        src={`https://image.tmdb.org/t/p/original${imagePath}`}
        alt="poster"
      />
      <p>{release}</p>
    </StyledCard>
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
`;

export default MovieCard;
