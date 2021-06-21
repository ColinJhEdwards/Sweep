const initState = {
  details: [],
};

const movieDetailsReducer = (state = initState, action) => {
  switch (action.type) {
    case "FETCH_MOVIEDETAIL":
      return {
        ...state,
        details: action.payload.details,
      };
    default:
      return { ...state };
  }
};

export default movieDetailsReducer;
