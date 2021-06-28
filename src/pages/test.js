import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExclamationCircle } from "@fortawesome/free-solid-svg-icons";
import { fade } from "../animations";
import { motion } from "framer-motion";

const Test = ({ search }) => {
  return (
    <StyledSVG variants={fade}>
      <div className="card">
        <FontAwesomeIcon className="error" icon={faExclamationCircle} />
        <h1>Sorry we couldn't find any results for:</h1>
        <h1>{search}</h1>
      </div>
    </StyledSVG>
  );
};

const StyledSVG = styled(motion.div)`
  min-height: 50vh;
  display: flex;
  justify-content: space-around;
  align-items: center;
  .card {
    margin: 2rem 0rem;
    height: 500px;
    background: white;
    border-radius: 15px;
    box-shadow: 10px 10px 40px rgb(0, 0, 0);
    color: black;
    padding: 2rem;
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-direction: column;
  }
  h1 {
    text-align: center;
  }
  .error {
    color: #c07d00;
    font-size: 5rem;
  }
  @media (max-width: 414px) {
    .card {
      width: 300px;
      h1 {
        font-size: 2rem;
      }
    }
  }
`;

export default Test;
