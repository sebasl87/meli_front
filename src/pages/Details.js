import React, { Component } from "react";
import { MeliBreadcrumb, MeliTotalDetails } from "../Components/index";
import { connect } from "react-redux";
import { fetchItemRequested } from "../actions/items";
import { withRouter } from "react-router-dom";

// const item = {
//   author: {
//     name: "Sebastian",
//     lastname: "Loguzzo",
//   },
//   item: {
//     id: "MLA885471589",
//     title: "Florero Decorativo De Mesa En Vidrio Concavo Alto 11 X 25 Cm",
//     price: {
//       currency: "ARS",
//       amount: 1531,
//     },
//     picture: "http://http2.mlstatic.com/D_630694-MLA43877108511_102020-O.jpg",
//     condition: "new",
//     free_shipping: false,
//     sold_quantity: 0,
//     description: "----------------------------------------------- GSP :: Horario: Lunes a Viernes de 10 a 18 Hs. Venta y Service de Equipos PC & Notebooks Accesorios de electrónica de todo tipo -------------------------------------- TODOS LOS PRECIOS SON MAS IVA -------------------------------------- Factura A y B 30 Años al servicio informático :: Villa del Parque :: Zona de Av.Jonte y Av.Nazca ----------------------------------------------------------------------- No se hacen entregas en el día, se coordina para el día siguiente hábil -----------------------------------------------------------------------",
//     breadcrumb: [
//       {
//           id: "MLA1574",
//           name: "Hogar, Muebles y Jardín"
//       },
//       {
//           id: "MLA1631",
//           name: "Adornos y Decoración del Hogar"
//       },
//       {
//           id: "MLA9972",
//           name: "Floreros"
//       }
//   ]
//   },
// };
class Details extends Component {
  constructor(props) {
    super(props);
    this.props.searchInItem(this.props.history.location.pathname.slice(7));
  }
  render() {
    return (
      <div className="container mb80">
        <MeliBreadcrumb data={this.props.item.breadcrumb} />
        <MeliTotalDetails totalDetails={this.props.item} />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    item: state.data.documents.data.item,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    searchInItem: (item) => dispatch(fetchItemRequested(item)),
  };
};
export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(Details)
);
