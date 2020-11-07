import { createStore } from "redux";
import reducers from "../reducers";

let store;

export default (initialState) => {
  {
    store = createStore(reducers, initialState);
  }

  return store;
};
