const initState = {
  popular: [],
  nowPlaying: [],
  upcoming: [],
};

const movieListReducer = (state = initState, action) => {
  switch (action.type) {
    case "FETCH_MOVIELIST":
      return {
        ...state,
        popular: action.payload.popular,
        nowPlaying: action.payload.nowPlaying,
        upcoming: action.payload.nowPlaying,
      };
    default:
      return { ...state };
  }
};

export default movieListReducer;
