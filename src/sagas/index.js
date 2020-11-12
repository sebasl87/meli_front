import { all } from "redux-saga/effects";

import apiItem from './items';

export default function* root() {
  yield all([
    apiItem()
  ]);
}
