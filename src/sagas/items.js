import { put, call, all, takeEvery } from "redux-saga/effects";
import ItemsServices from "../services/items";
import { fetchItemsSucceeded, FETCH_ITEMS_REQUESTED } from "../actions/items";

export function* apiCall(string) {
  try {
    // console.log(string)
    const results = yield call(ItemsServices.fetchItems, {
      ...string,
    });
    yield put(fetchItemsSucceeded(results));
  } catch (error) {
    console.log(error);
  }
  // const { results } = Axios.get(
  //   "http://localhost:3030/api/items?q=perfume"
  //   ); //RUTA DEL ENDPOITN http://localhost:3030/api/items
  // "https://api.mercadolibre.com/sites/MLA/search?q=lona"
  // if (status !== 200) {
  //   return [];
  // }
  // return data;
}

// import KpiServices from "@services/kpi"; PONER ACA el apicall

export function* sagasListener() {
  yield all([takeEvery(FETCH_ITEMS_REQUESTED, apiCall)]);
}
