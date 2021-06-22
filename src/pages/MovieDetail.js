import react, { useEffect } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";

const MovieDetail = () => {
  const { details } = useSelector((state) => state.movieDetails);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const { trailer } = useSelector((state) => state.movies);
  const videoSrc = `https://www.youtube.com/embed/${trailer}`;
  return (
    <StyledDetails>
      <div className="movie">
        <h2>{details.title}</h2>
        <Line />
        <iframe src={videoSrc}></iframe>
        <Line />
        <div className="desc">
          <img
            className="poster"
            src={`https://image.tmdb.org/t/p/original${details.poster_path}`}
            alt="poster"
          />
          <p>{details.overview}</p>
        </div>
        <img
          className="backdrop"
          src={`https://image.tmdb.org/t/p/original${details.backdrop_path}`}
          alt="backdrop"
        />
      </div>
    </StyledDetails>
  );
};

const StyledDetails = styled(motion.div)`
  min-height: 95vh;
  width: 80%;
  margin: auto;
  .movie {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    h2 {
      font-size: 3rem;
      margin: 2rem 0rem;
    }
    iframe {
      height: 500px;
      width: 800px;
      margin: 2rem 0rem;
    }
    .desc {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      margin: 2rem 0rem;
      p {
        font-size: 2rem;
        text-align: center;
        margin: 2rem 0rem;
      }
      .poster {
        width: 400px;
        box-shadow: 0px 0px 20px rgb(0, 0, 0);
        border-radius: 15px;
      }
    }
    .backdrop {
      width: 1400px;
      box-shadow: 0px 0px 20px rgb(0, 0, 0);
      border-radius: 15px;
      margin: 2rem 0rem;
    }
  }
`;

const Line = styled.div`
  width: 70%;
  height: 2px;
  margin: 1rem;
  border-radius: 20px;
  background: #c07d00;
`;

export default MovieDetail;
