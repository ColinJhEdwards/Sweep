import React, { useEffect } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
//redux stuff
import { useSelector, useDispatch } from "react-redux";
import { loadMovieList } from "../actions/movieListAction";

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadMovieList());
  }, [dispatch]);

  const popular = useSelector((state) => state);

  return (
    <StyledHome>
      <div>
        <h2>Home</h2>
      </div>
      <div className="movies"></div>
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
