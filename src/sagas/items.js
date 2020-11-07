import { put, call } from "redux-saga/effects";
import Axios from "axios";
import { fetchItemsSucceeded } from "../actions/items";

const apiCall = async () => {
  const { data, status } = await Axios.get(
    "https://api.mercadolibre.com/sites/MLA/search?q=lona"
  ); //RUTA DEL ENDPOITN http://localhost:3030/api/items
  console.log(data)
  if (status !== 200) {
    return [];
  }
  return data;
};

// import KpiServices from "@services/kpi"; PONER ACA el apicall

export function* fetchItems() {
  const items = yield call(apiCall);
  yield put(fetchItemsSucceeded(items));
}
