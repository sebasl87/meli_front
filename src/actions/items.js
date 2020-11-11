export const FETCH_ITEMS_REQUESTED = "FETCH_ITEMS_REQUESTED";
export const FETCH_ITEMS_SUCCEEDED = "FETCH_ITEMS_SUCCEEDED";
export const FETCH_ITEM_REQUESTED = "FETCH_ITEM_REQUESTED";
export const FETCH_ITEM_SUCCEEDED = "FETCH_ITEM_SUCCEEDED";

export const fetchItemsRequested = (query) => ({
  type: FETCH_ITEMS_REQUESTED,
  query,
});
export const fetchItemsSucceeded = (results) => ({
  type: FETCH_ITEMS_SUCCEEDED,
  results,
});

export const fetchItemRequested = (item) => ({
  type: FETCH_ITEM_REQUESTED,
  item,
});
export const fetchItemSucceeded = (result) => ({
  type: FETCH_ITEM_SUCCEEDED,
  result,
});