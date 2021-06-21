const initState = {
  popular: [],
  nowPlaying: [],
  topRated: [],
};

const movieListReducer = (state = initState, action) => {
  switch (action.type) {
    case "FETCH_MOVIELIST":
      return {
        ...state,
        popular: action.payload.popular,
        nowPlaying: action.payload.nowPlaying,
        topRated: action.payload.topRated,
      };
    default:
      return { ...state };
  }
};

export default movieListReducer;
