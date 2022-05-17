import react, { useEffect } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";
import { pageAnimation, fade } from "../animations";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowCircleLeft } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const MovieDetail = () => {
  const { details } = useSelector((state) => state.movieDetails);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const { trailer } = useSelector((state) => state.movies);

  console.log(details);

  return (
    <StyledDetails
      variants={pageAnimation}
      initial="hidden"
      animate="show"
      exit="exit"
    >
      <div className="backArrow" title="Go Back">
        <Link to="/">
          <FontAwesomeIcon className="arrow" icon={faArrowCircleLeft} />
        </Link>
      </div>
      <div className="movie">
        <motion.h2 variants={fade}>{details.title}</motion.h2>
        <Line />
        <motion.iframe
          variants={fade}
          src={`https://www.youtube.com/embed/${trailer.items[0].id.videoId}`}
          title="movieDetail-trailer"
          frameborder="0"
        ></motion.iframe>
        <Line />
        <div className="desc">
          <motion.img
            variants={fade}
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
  position: relative;
  .backArrow {
    position: absolute;
    top: 0;
    left: 0;
    .arrow {
      font-size: 5rem;
      margin: 2rem 0rem;
      cursor: pointer;
    }
  }
  .movie {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    h2 {
      font-size: 3rem;
      margin: 2rem 0rem;
      text-align: center;
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
  @media (max-width: 1410px) {
    .movie {
      .backdrop {
        width: 1200px;
      }
    }
  }
  @media (max-width: 1200px) {
    .movie {
      .backdrop {
        width: 800px;
      }
    }
  }
  @media (max-width: 815px) {
    .movie {
      iframe {
        height: 300px;
        width: 500px;
      }
      .backdrop {
        width: 500px;
      }
    }
  }
  @media (max-width: 414px) {
    .backArrow {
      .arrow {
        font-size: 2rem;
      }
    }
    .movie {
      iframe {
        height: 300px;
        width: 400px;
      }
      .desc {
        .poster {
          width: 350px;
        }
        p {
          font-size: 1.5rem;
        }
      }
      .backdrop {
        width: 400px;
      }
    }
  }
  @media (max-width: 375px) {
    .movie {
      iframe {
        height: 250px;
        width: 350px;
      }
      .desc {
        .poster {
          width: 350px;
        }
        p {
          font-size: 1.5rem;
        }
      }
      .backdrop {
        width: 350px;
      }
    }
  }
  @media (max-width: 320px) {
    .movie {
      iframe {
        height: 200px;
        width: 300px;
      }
      .desc {
        .poster {
          width: 300px;
        }
        p {
          font-size: 1.5rem;
        }
      }
      .backdrop {
        width: 300px;
      }
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
