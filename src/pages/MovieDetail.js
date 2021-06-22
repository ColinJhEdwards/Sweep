import react from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";

const MovieDetail = () => {
  const { details } = useSelector((state) => state.movieDetails);
  console.log(details);
  return (
    <StyledDetails>
      <div className="movie">
        <h2>{details.title}</h2>
      </div>
    </StyledDetails>
  );
};

const StyledDetails = styled(motion.div)`
  min-height: 95vh;
`;

export default MovieDetail;
