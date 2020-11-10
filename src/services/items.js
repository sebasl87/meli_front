import Axios from "axios";

class ItemsServices {
  static fetchItems(string) {
    //  console.log(string)
    return Axios.get(`http://localhost:3030/api/items?q=${string.item}`);
    // ${string}
    // ´http://localhost:3030/api/items?q=perfume´
  }
}

export default ItemsServices;
