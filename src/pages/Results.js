import React, { Component } from "react";
import { MeliBreadcrumb, MeliListCard } from "../Components/index";
const ruta = ["lo1", "lo2", "lo4"];
const items = {
  author: {
    name: "Sebastian",
    lastname: "Loguzzo",
  },
  categories: [
    "Piletas y Accesorios",
    "Toldos y Cerramientos",
    "Lonas Playeras",
    "Muebles para Exterior",
    "Hornos, Parrillas y Accesorios",
    "Gazebos",
    "Sombrillas",
    "Hamacas Paraguayas",
    "Herramientas para Jardín",
    "Invernaderos y Carpas",
    "Cercos y Tranqueras",
    "Macetas y Maceteros",
    "Sillones Inflables",
    "Otros",
  ],
  items: [
    {
      id: "MLA870176477",
      title:
        "Pileta Estructural Rectangular Pelopincho 1010 Con Capacidad De 500 Litros De 1.55m De Largo X 1.07m De Ancho",
      price: {
        currency: "ARS",
        amount: 3399.9,
      },
      picture: "http://http2.mlstatic.com/D_678155-MLA40184463929_122019-I.jpg",
      condition: "new",
      free_shipping: false,
      state: "Capital Federal",
    },
    {
      id: "MLA875669638",
      title:
        "Pileta Estructural Rectangular Pelopincho 1020 Con Capacidad De 1000 Litros De 1.85m De Largo X 1.45m De Ancho",
      price: {
        currency: "ARS",
        amount: 5399.9,
      },
      picture: "http://http2.mlstatic.com/D_852944-MLA40164345364_122019-I.jpg",
      condition: "new",
      free_shipping: false,
      state: "Capital Federal",
    },
    {
      id: "MLA882054479",
      title:
        "Pileta Estructural Rectangular Sol De Verano Sol 300 Con Capacidad De 4600 Litros De 3m De Largo X 2.2m De Ancho",
      price: {
        currency: "ARS",
        amount: 12499,
      },
      picture: "http://http2.mlstatic.com/D_777170-MLA43642740198_102020-I.jpg",
      condition: "new",
      free_shipping: false,
      state: "Buenos Aires",
    },
    {
      id: "MLA875557909",
      title:
        "Pileta Estructural Rectangular Sol De Verano Sol 250 Con Capacidad De 2700 Litros De 2.5m De Largo X 1.65m De Ancho",
      price: {
        currency: "ARS",
        amount: 9599.9,
      },
      picture: "http://http2.mlstatic.com/D_850096-MLA40164904726_122019-I.jpg",
      condition: "new",
      free_shipping: false,
      state: "Capital Federal",
    },
  ],
};
class Results extends Component {
  render() {
    return (
      <div className="container mb80">
        <MeliBreadcrumb data={ruta} />
        <div className="rounded bg-white">
          <MeliListCard totalData={items.items} />
        </div>
      </div>
    );
  }
}

export default Results;
