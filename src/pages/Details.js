import React, { Component } from "react";
import { MeliBreadcrumb, MeliTotalDetails } from "../Components/index";
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
    description: "----------------------------------------------- GSP :: Horario: Lunes a Viernes de 10 a 18 Hs. Venta y Service de Equipos PC & Notebooks Accesorios de electrónica de todo tipo -------------------------------------- TODOS LOS PRECIOS SON MAS IVA -------------------------------------- Factura A y B 30 Años al servicio informático :: Villa del Parque :: Zona de Av.Jonte y Av.Nazca ----------------------------------------------------------------------- No se hacen entregas en el día, se coordina para el día siguiente hábil -----------------------------------------------------------------------",
    breadcrumb: [
      {
          id: "MLA1574",
          name: "Hogar, Muebles y Jardín"
      },
      {
          id: "MLA1631",
          name: "Adornos y Decoración del Hogar"
      },
      {
          id: "MLA9972",
          name: "Floreros"
      }
  ]
  },
};
class Details extends Component {
  render() {
    return (
      <div className="container mb80">
        <MeliBreadcrumb data={item.item.breadcrumb} />
        <MeliTotalDetails totalDetails={item.item} />
      </div>
    );
  }
}

export default Details;
