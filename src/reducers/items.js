const initialState = {
  query: "",
  loader: true,
  documents: null,
};

const itemsReducer = (state = { ...initialState }, action) => {
  switch (action.type) {
    case "FETCH_ITEMS_REQUESTED":
      return { ...state, query: action.string, loader: true };
    case "FETCH_ITEMS_SUCCEEDED":
      return { ...state, documents: action.results, loader: false };
    case "FETCH_ITEM_REQUESTED":
      return { ...state, item: null, loader: true };
    case "FETCH_ITEM_SUCCEEDED":
      return { ...state, item: action.result, loader: false };
    default:
      return { ...state };
  }
};

export default itemsReducer;
