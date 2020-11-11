import Axios from "axios";

class ItemsServices {
  static fetchItems(string) {
    return Axios.get(`http://localhost:3030/api/items?q=${string.string.item}`);
  }
}

export default ItemsServices;
