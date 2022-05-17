import axios from "axios";
import {
  searchComingSoonURL,
  searchNowPlayingURL,
  searchTopRatedURL,
} from "../api";

export const loadMovieList = () => async (dispatch) => {
  const comingSoonMovies = await axios.get(searchComingSoonURL());
  const nowPlayingMovies = await axios.get(searchNowPlayingURL());
  const topRatedMovies = await axios.get(searchTopRatedURL());
  dispatch({
    type: "FETCH_MOVIELIST",
    payload: {
      //after axios fetches the data add it to the payload
      comingSoon: comingSoonMovies.data.results,
      nowPlaying: nowPlayingMovies.data.results,
      topRated: topRatedMovies.data.results,
    },
  });
};
