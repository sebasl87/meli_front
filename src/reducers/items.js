const initialState = {
  query: "",
  documents: [],
};

const itemsReducer = (state = { ...initialState }, action) => {
  switch (action.type) {
    case "FETCH_ITEMS_REQUESTED":
      return { ...state, query: action.string };
    case "FETCH_ITEMS_SUCCEEDED":
      return { ...state, documents: action.results };
    case "FETCH_ITEM_REQUESTED":
      return { ...state, item: action.item };
    case "FETCH_ITEM_SUCCEEDED":
      return { ...state, documents: action.result };
    default:
      return { ...state };
  }
};

export default itemsReducer;
