import React from "react";
import PropTypes from "prop-types";
import "./meli-detail.scss";

const MeliDetail = ({ itemDetail }) => (
  <div className="detailBody mt-32">
    <div className="fz14 mb-16">
      {itemDetail.condition === "new" ? "Nuevo" : "Usado"} -{" "}
      {itemDetail.sold_quantity} vendidos
    </div>
    <div className="fz24 mb-32 font-weight-bold">{itemDetail.title}</div>
    <div className="fz46 mb-32 font-weight-bold">
      {itemDetail.price.currency} {itemDetail.price.amount}
    </div>
    <div className="pr-32">
      <button className="btn btn-primary btn-block">Comprar</button>
    </div>
  </div>
);

MeliDetail.prototype = {
  itemDetail: PropTypes.shape({
    condition: PropTypes.string,
    sold_quantity: PropTypes.number,
    title: PropTypes.string,
    price: PropTypes.shape({
      currency: PropTypes.string,
      amount: PropTypes.number,
    }),
  }),
};

export default MeliDetail;
