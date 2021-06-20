const initState = {
  popular: [],
};

const movieListReducer = (state = initState, action) => {
  switch (action.type) {
    case "FETCH_MOVIELIST":
      return {
        ...state,
        popular: action.payload.popular,
      };
    default:
      return { ...state };
  }
};

export default movieListReducer;
