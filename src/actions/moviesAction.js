import axios from "axios";
import { searchMovieURL, searchTrailerURL } from "../api";

export const loadMovie = (search) => async (dispatch) => {
  const searchedMovie = await axios.get(searchMovieURL(search));
  const searchedTrailer = await axios.get(searchTrailerURL(search));
  dispatch({
    type: "FETCH_MOVIE",
    payload: {
      //after axios fetches the data add it to the payload
      movie: searchedMovie.data,
      // selecting only the videoID from youtube video api so the id can be placed in the iframe src
      trailer: searchedTrailer.data.items[0].id.videoId,
    },
  });
};
