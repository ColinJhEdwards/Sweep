import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { loadMovie } from "../actions/moviesAction";
import Test from "../pages/test";
import styled from "styled-components";
import { motion } from "framer-motion";
import filler from "../images/filler.jpg";
import { grow, xSlide, ySlide, fade } from "../animations";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendar,
  faUsers,
  faClock,
  faAward,
  faBullhorn,
  faPen,
} from "@fortawesome/free-solid-svg-icons";

const Movie = ({ search }) => {
  const dispatch = useDispatch();
  // fetch movie based off of search value
  useEffect(() => {
    dispatch(loadMovie(search));
  }, [search]);
  // get data from state
  const { movie, trailer } = useSelector((state) => state.movies);

  // const videoSrc = `https://www.youtube.com/embed/${trailer.id.videoId}`;

  return (
    <>
      {movie.Response === "False" ? (
        <Test search={search} />
      ) : (
        <MovieStyle variants={grow}>
          <motion.div variants={fade} className="content">
            <Hide>
              <motion.h2 variants={ySlide}>{movie.Title}</motion.h2>
            </Hide>
            <Line></Line>
            <div className="test">
              <Hide>
                <motion.div variants={ySlide} className="video">
                  <iframe
                    src={`https://www.youtube.com/embed/${trailer.items[0].id.videoId}`}
                    title="movieSearch-trailer"
                    frameBorder="0"
                  ></iframe>
                </motion.div>
              </Hide>
              <div className="info">
                <Hide>
                  <motion.p variants={xSlide}>
                    <FontAwesomeIcon className="orange" icon={faCalendar} />{" "}
                    {movie.Released}
                  </motion.p>
                </Hide>
                <Hide>
                  <motion.p variants={xSlide}>
                    <FontAwesomeIcon className="orange" icon={faClock} />{" "}
                    {movie.Runtime}
                  </motion.p>
                </Hide>
                <Hide>
                  <motion.p variants={xSlide}>Rated: {movie.Rated}</motion.p>
                </Hide>
                <Hide>
                  <motion.p variants={xSlide}>Genre: {movie.Genre}</motion.p>
                </Hide>
              </div>
            </div>
          </motion.div>
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
          <Line></Line>
          <div className="awards">
            <p>
              <span>
                <FontAwesomeIcon icon={faAward} /> Awards:{" "}
              </span>{" "}
              {movie.Awards}
            </p>
            <p>
              <span>
                <FontAwesomeIcon icon={faUsers} /> Actors:{" "}
              </span>{" "}
              {movie.Actors}
            </p>
            <p>
              <span>
                <FontAwesomeIcon icon={faBullhorn} /> Director(s):{" "}
              </span>{" "}
              {movie.Director}
            </p>
            <p>
              <span>
                <FontAwesomeIcon icon={faPen} /> Writer(s):{" "}
              </span>{" "}
              {movie.Writer}
            </p>
          </div>
        </MovieStyle>
      )}
    </>
  );
};

const MovieStyle = styled(motion.div)`
  min-height: 90vh;
  width: 60%;
  margin: 0rem auto 2rem auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  text-align: center;
  span {
    color: #3b3bff;
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
      width: 20%;
      .orange {
        color: #c07d00;
      }
      p {
        margin: 2rem 0rem;
        font-size: 1.5rem;
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
  @media (max-width: 1020px) {
    .test {
      flex-direction: column;
      .video {
        iframe {
          height: 250px;
          width: 400px;
        }
      }
      .info {
        flex-direction: row;
        width: 100%;
        p {
          font-size: 1rem;
          margin: 1rem 1rem;
        }
      }
    }
    .wrap {
      flex-direction: column;
    }
    .awards {
      align-items: center;
      justify-content: center;
      p {
        font-size: 1rem;
      }
    }
  }
  @media (max-width: 414px) {
    .test {
      .video {
        iframe {
          width: 350px;
        }
      }
      .info {
        flex-wrap: wrap;
        p {
          font-size: 1rem;
        }
      }
    }
    .content {
      box-shadow: 0px 0px 0px black;
      padding: 0rem;
    }
  }
  @media (max-width: 320px) {
    .test {
      .video {
        iframe {
          width: 300px;
        }
      }
    }
    .content {
      padding: 0rem;
    }
    .wrap {
      .plot {
        width: 80%;
      }
    }
  }
`;

const Line = styled.div`
  width: 70%;
  height: 2px;
  margin: 0rem auto 2rem auto;
  border-radius: 20px;
  background: #c07d00;
`;

const Hide = styled.div`
  overflow: hidden;
`;

export default Movie;
