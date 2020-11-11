import Axios from "axios";

class ItemsServices {
  static fetchItems(query) {
    return Axios.get(`http://localhost:3030/api/items?q=${query.query}`);
  };
  static fetchItem(item) {
    return Axios.get(`http://localhost:3030/api/items/${item.item}`);
  }
}

export default ItemsServices;
