import React from "react";
import PropTypes from "prop-types";
import "./meli-img.css";

const MeliImg = ({ srcI, altI, max }) => (
  <img src={srcI} alt={altI} className={max ? "imagen bigOne" : "imagen"} />
);

MeliImg.prototype = {
  srcI: PropTypes.string,
  altI: PropTypes.string,
  max: PropTypes.bool,
};

export default MeliImg;
