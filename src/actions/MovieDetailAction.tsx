import axios from "axios";
import { searchMovieDetailURL } from "../api";

export const loadMovieDetail = (id) => async (dispatch) => {
  const searchedMovieDetail = await axios.get(searchMovieDetailURL(id));
  dispatch({
    type: "FETCH_MOVIEDETAIL",
    payload: {
      //after axios fetches the data add it to the payload
      details: searchedMovieDetail.data,
    },
  });
};
