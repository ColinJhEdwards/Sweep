const initState = {
  popular: [],
  nowPlaying: [],
};

const movieListReducer = (state = initState, action) => {
  switch (action.type) {
    case "FETCH_MOVIELIST":
      return {
        ...state,
        popular: action.payload.popular,
        nowPlaying: action.payload.nowPlaying,
      };
    default:
      return { ...state };
  }
};

export default movieListReducer;
