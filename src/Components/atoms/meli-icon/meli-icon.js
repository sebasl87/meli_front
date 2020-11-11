import React from "react";
import PropTypes from "prop-types";
import "./meli-icon.scss";

const MeliIcon = ({ srcI, altI, noBg, passOnClick }) => (
  <img
    src={srcI}
    alt={altI}
    className={noBg ? "iconoSinBg" : "icono"}
    onClick={passOnClick}
  />
);

MeliIcon.prototype = {
  srcI: PropTypes.string,
  altI: PropTypes.string,
};

export default MeliIcon;
