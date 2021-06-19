import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import FoodSVG from "../components/FoodSVG";

const Home = () => {
  return (
    <StyledHome>
      <h2>Home</h2>
      <FoodSVG />
    </StyledHome>
  );
};

const StyledHome = styled(motion.div)`
  min-height: 90vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export default Home;
