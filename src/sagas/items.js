import { put, call, all, takeEvery } from "redux-saga/effects";
import ItemsServices from "../services/items";
import { fetchItemsSucceeded, FETCH_ITEMS_REQUESTED, fetchItemSucceeded, FETCH_ITEM_REQUESTED } from "../actions/items";

export function* apiCall(query) {
  try {
    const results = yield call(ItemsServices.fetchItems, {
      ...query,
    });
    yield put(fetchItemsSucceeded(results));
  } catch (error) {
    console.log(error);
  }
}
export function* apiCallItem(item) {
  try {
    const result = yield call(ItemsServices.fetchItem, {
      ...item,
    });
    yield put(fetchItemSucceeded(result));
  } catch (error) {
    console.log(error);
  }
}
export function* sagasListener() {
  yield all([takeEvery(FETCH_ITEMS_REQUESTED, apiCall)]);
  yield all([takeEvery(FETCH_ITEM_REQUESTED, apiCallItem)]);

}
