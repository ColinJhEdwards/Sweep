import axios from "axios";
import { searchPopularURL } from "../api";

export const loadMovieList = () => async (dispatch) => {
  const popularMovies = await axios.get(searchPopularURL());
  dispatch({
    type: "FETCH_MOVIELIST",
    payload: {
      //after axios fetches the data add it to the payload
      popular: popularMovies.data.results,
    },
  });
};
