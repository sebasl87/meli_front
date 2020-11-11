const initialState = {
  query:'',
  documents: [],
};

const itemsReducer = (state = { ...initialState }, action) => {
  switch (action.type) {
    case "FETCH_ITEMS_REQUESTED":
      return { ...state, query: action.string };
    case "FETCH_ITEMS_SUCCEEDED":
      return { ...state, documents: action.results };
    default:
      return { ...state };
  }
};

export default itemsReducer;
