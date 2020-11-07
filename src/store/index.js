import { createStore, applyMiddleware, compose } from "redux";
import reducers from "../reducers";
import saga from "redux-saga";
import sagas from "../sagas";

const sagaMiddleware = saga();

// eslint-disable-next-line
export default (initialState = {}) => {
  const composeEnhancers =
    (typeof window !== "undefined" &&
      window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
    compose;

  const enhancer = composeEnhancers(applyMiddleware(sagaMiddleware));
  const store = createStore(reducers, initialState, enhancer);

  sagaMiddleware.run(sagas);

  return store;
};
