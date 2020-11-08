import React from "react";
import PropTypes from "prop-types";
import "./meli-header.css";
import { MeliLogo, MeliSearch } from "../../index";

const MeliHeader = ({ placeholderM }) => {
  return (
    <div className="header">
      <MeliLogo />
      <MeliSearch placeholderM={placeholderM} />
    </div>
  );
};

MeliHeader.prototype = {
  data: PropTypes.array,
};

export default MeliHeader;
