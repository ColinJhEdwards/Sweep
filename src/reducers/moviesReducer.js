const initState = {
  movie: [],
};

const moviesReducer = (state = initState, action) => {
  switch (action.type) {
    case "FETCH_MOVIE":
      return {
        ...state,
        movie: action.payload.movie,
      };
    default:
      return { ...state };
  }
};

export default moviesReducer;
