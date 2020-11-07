const initialState = {
  documents: [],
};

const itemsReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_ITEMS_REQUESTED":
      return { ...state };
    case "FETCH_ITEMS_SUCCEEDED":
      return { ...state, documents: action.item };
    default:
      return { ...state };
  }
};

export default itemsReducer;
