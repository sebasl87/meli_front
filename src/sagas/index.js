import { all, takeEvery } from "redux-saga/effects";

import { FETCH_ITEMS_REQUESTED, FETCH_ITEM_REQUESTED } from "../actions/items";
import {apiCall, apiCallItem} from './items';

export default function* root() {
  yield all([takeEvery(FETCH_ITEMS_REQUESTED, apiCall)]);
  yield all([takeEvery(FETCH_ITEM_REQUESTED, apiCallItem)]);

}
