// improt combineReducers for adding mutible reducers to the store
import { combineReducers } from "redux";
// import reducers
import moviesReducer from "./moviesReducer";

//give the reducer a name so it can be referenced
const rootReducer = combineReducers({
  movies: moviesReducer,
});

export default rootReducer;
