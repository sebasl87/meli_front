import React, { Component } from "react";
import { MeliBreadcrumb, MeliImg } from "../Components/index";
const ruta = ["lo1", "lo2", "lo4"];
const item = {
  author: {
    name: "Sebastian",
    lastname: "Loguzzo",
  },
  item: {
    id: "MLA885471589",
    title: "Florero Decorativo De Mesa En Vidrio Concavo Alto 11 X 25 Cm",
    price: {
      currency: "ARS",
      amount: 1531,
    },
    picture: "http://http2.mlstatic.com/D_630694-MLA43877108511_102020-O.jpg",
    condition: "new",
    free_shipping: false,
    sold_quantity: 0,
    description: "Florero Decorativo De Mesa En Vidrio Concavo Alto 11 X 25 Cm",
  },
};
class Details extends Component {
  render() {
    return (
      <div className="container mb80">
        <MeliBreadcrumb data={ruta} />
        <div className="rounded bg-white clearfix">
          <div className="w-75 float-left">
            <MeliImg max="true" srcI={item.item.picture} />
          </div>
          <div className="w-25 float-right">
            <div className="detailBody">
              <text>
                {item.item.condition} - {item.item.sold_quantity} vendidos
              </text>
              <text className="mb-1">{item.item.title}</text>
              <text className="mb-5">
                {item.item.currency}
                {item.item.amount}
              </text>
              <button className="btn btn-primary mb-5">Comprar</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Details;
