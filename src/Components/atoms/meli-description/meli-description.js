import React from "react";
import PropTypes from "prop-types";
import "./meli-description.scss";

const MeliDescription = ({ itemDescription }) => (
  <div className="ml-32">
    <div className="fz28 mb-32">Descripción del producto</div>
    <div className="fz16">{itemDescription}</div>
  </div>
);

MeliDescription.prototype = {
  itemDescription: PropTypes.string
};

export default MeliDescription;
