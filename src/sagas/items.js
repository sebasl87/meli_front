import { put, call, all, takeLatest } from "redux-saga/effects";
import ItemsServices from "../services/items";
import { fetchItemsSucceeded, FETCH_ITEMS_REQUESTED, fetchItemSucceeded, FETCH_ITEM_REQUESTED } from "../actions/items";

export function* apiCall(props) {
  try {
    const {data} = yield call(ItemsServices.fetchItems, {
      ...props,
    });
    yield put(fetchItemsSucceeded(data));
  } catch (error) {
    console.log(error);
  }
}

export function* apiCallItem(props) {
  try {

    const {data, status} = yield call(ItemsServices.fetchItem, {
      ...props,
    });


    yield put(fetchItemSucceeded(data));
  } catch (error) {
    console.log(error);
  }
}

export default function* sagasListener() {
  yield all([
    takeLatest(FETCH_ITEMS_REQUESTED, apiCall), 
    takeLatest(FETCH_ITEM_REQUESTED, apiCallItem)
  ]);
}
