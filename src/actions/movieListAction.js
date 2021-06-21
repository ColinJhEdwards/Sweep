import axios from "axios";
import { searchPopularURL, searchNowPlayingURL } from "../api";

export const loadMovieList = () => async (dispatch) => {
  const popularMovies = await axios.get(searchPopularURL());
  const nowPlayingMovies = await axios.get(searchNowPlayingURL());
  dispatch({
    type: "FETCH_MOVIELIST",
    payload: {
      //after axios fetches the data add it to the payload
      popular: popularMovies.data.results,
      nowPlaying: nowPlayingMovies.data.results,
    },
  });
};
