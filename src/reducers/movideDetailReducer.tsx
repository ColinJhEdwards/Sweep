const initState = {
  details: [],
};

interface Action {
  type: "FETCH_MOVIEDETAIL";
}

const movieDetailsReducer = (state = initState, action: Action) => {
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
