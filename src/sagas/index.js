import { all, takeEvery } from "redux-saga/effects";

import { FETCH_ITEMS_REQUESTED } from "../actions/items";
import {fetchItems} from './items';

export default function* root() {
  yield all([takeEvery(FETCH_ITEMS_REQUESTED, fetchItems)]);
}
