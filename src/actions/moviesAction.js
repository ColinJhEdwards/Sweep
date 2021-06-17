import axios from "axios";
import { searchMovieURL } from "../api";

export const loadMovie = () => async (dispatch) => {
  const searchedMovie = await axios.get(searchMovieURL(search));
  dispatch({
    type: "FETCH_MOVIE",
    payload: {
      //after axios fetches the data add it to the movie payload
      movie: searchedMovie,
    },
  });
};
