const initState = {
  comingSoon: [],
  nowPlaying: [],
  topRated: [],
};

const movieListReducer = (state = initState, action) => {
  switch (action.type) {
    case "FETCH_MOVIELIST":
      return {
        ...state,
        comingSoon: action.payload.comingSoon,
        nowPlaying: action.payload.nowPlaying,
        topRated: action.payload.topRated,
        isLoading: false,
      };
    default:
      return { ...state, isLoading: true };
  }
};

export default movieListReducer;
