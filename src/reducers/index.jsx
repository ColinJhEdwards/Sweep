// improt combineReducers for adding mutible reducers to the store
import { combineReducers } from "redux";
// import reducers
import moviesReducer from "./moviesReducer";
import movieListReducer from "./movieListReducer";
import movieDetailsReducer from "./movideDetailReducer";

//give the reducer a name so it can be referenced
const rootReducer = combineReducers({
  movies: moviesReducer,
  movieList: movieListReducer,
  movieDetails: movieDetailsReducer,
});

export default rootReducer;
