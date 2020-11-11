import { put, call, all, takeEvery } from "redux-saga/effects";
import ItemsServices from "../services/items";
import { fetchItemsSucceeded, FETCH_ITEMS_REQUESTED } from "../actions/items";

export function* apiCall(string) {
  try {
    const results = yield call(ItemsServices.fetchItems, {
      ...string,
    });
    yield put(fetchItemsSucceeded(results));
  } catch (error) {
    console.log(error);
  }
}

export function* sagasListener() {
  yield all([takeEvery(FETCH_ITEMS_REQUESTED, apiCall)]);
}
