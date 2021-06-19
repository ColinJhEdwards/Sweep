const initState = {
  movie: [],
  trailer: [],
};

const moviesReducer = (state = initState, action) => {
  switch (action.type) {
    case "FETCH_MOVIE":
      return {
        ...state,
        movie: action.payload.movie,
        trailer: action.payload.trailer,
      };
    default:
      return { ...state };
  }
};

export default moviesReducer;
