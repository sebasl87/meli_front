export const FETCH_ITEMS_REQUESTED = "FETCH_ITEMS_REQUESTED";
export const FETCH_ITEMS_SUCCEEDED = "FETCH_ITEMS_SUCCEEDED";

export const fetchItemsRequested = (string) => ({
  type: FETCH_ITEMS_REQUESTED,
  string,
});
export const fetchItemsSucceeded = (results) => ({
  type: FETCH_ITEMS_SUCCEEDED,
  results,
});
