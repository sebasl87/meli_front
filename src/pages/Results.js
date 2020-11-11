import React, { Component } from "react";
import { MeliBreadcrumb, MeliListCard } from "../Components/index";
import { connect } from "react-redux";
import { fetchItemsRequested } from "../actions/items";
import { withRouter } from "react-router-dom";

// const items = {
//   author: {
//     name: "Sebastian",
//     lastname: "Loguzzo",
//   },
//   categories: [
//     "Piletas y Accesorios",
//     "Toldos y Cerramientos",
//     "Lonas Playeras",
//     "Muebles para Exterior",
//     "Hornos, Parrillas y Accesorios",
//     "Gazebos",
//     "Sombrillas",
//     "Hamacas Paraguayas",
//     "Herramientas para Jardín",
//     "Invernaderos y Carpas",
//     "Cercos y Tranqueras",
//     "Macetas y Maceteros",
//     "Sillones Inflables",
//     "Otros",
//   ],
//   items: [
//     {
//       id: "MLA870176477",
//       title:
//         "Pileta Estructural Rectangular Pelopincho 1010 Con Capacidad De 500 Litros De 1.55m De Largo X 1.07m De Ancho",
//       price: {
//         currency: "ARS",
//         amount: 3399.9,
//       },
//       picture: "http://http2.mlstatic.com/D_678155-MLA40184463929_122019-I.jpg",
//       condition: "new",
//       free_shipping: false,
//       state: "Capital Federal",
//     },
//     {
//       id: "MLA875669638",
//       title:
//         "Pileta Estructural Rectangular Pelopincho 1020 Con Capacidad De 1000 Litros De 1.85m De Largo X 1.45m De Ancho",
//       price: {
//         currency: "ARS",
//         amount: 5399.9,
//       },
//       picture: "http://http2.mlstatic.com/D_852944-MLA40164345364_122019-I.jpg",
//       condition: "new",
//       free_shipping: false,
//       state: "Capital Federal",
//     },
//     {
//       id: "MLA882054479",
//       title:
//         "Pileta Estructural Rectangular Sol De Verano Sol 300 Con Capacidad De 4600 Litros De 3m De Largo X 2.2m De Ancho",
//       price: {
//         currency: "ARS",
//         amount: 12499,
//       },
//       picture: "http://http2.mlstatic.com/D_777170-MLA43642740198_102020-I.jpg",
//       condition: "new",
//       free_shipping: false,
//       state: "Buenos Aires",
//     },
//     {
//       id: "MLA875557909",
//       title:
//         "Pileta Estructural Rectangular Sol De Verano Sol 250 Con Capacidad De 2700 Litros De 2.5m De Largo X 1.65m De Ancho",
//       price: {
//         currency: "ARS",
//         amount: 9599.9,
//       },
//       picture: "http://http2.mlstatic.com/D_850096-MLA40164904726_122019-I.jpg",
//       condition: "new",
//       free_shipping: false,
//       state: "Capital Federal",
//     },
//   ],
//     breadcrumb: [
//         {
//             id: "MLA1574",
//             name: "Hogar, Muebles y Jardín"
//         },
//         {
//             id: "MLA1621",
//             name: "Jardines y Exteriores"
//         },
//         {
//             id: "MLA2521",
//             name: "Piletas y Accesorios"
//         }
//     ]
// };
// const { items }= this.props;

class Results extends Component {
  componentDidMount() {}
  constructor(props) {
    super(props);
    this.props.searchIn(this.props.history.location.search.slice(3));
  }
  render() {
    return (
      <div className="container mb80">
        <MeliBreadcrumb data={this.props.items.data.breadcrumb} />
        <div className="rounded bg-white">
          <MeliListCard totalData={this.props.items.data.items} />
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    query: state.data.query.item,
    items: state.data.documents,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    searchIn: (query) => dispatch(fetchItemsRequested(query)),
  };
};
export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(Results)
);
