import React from "react";
import PropTypes from "prop-types";
import "./meli-header.scss";
import { MeliLogo, MeliSearch } from "../../index";

const MeliHeader = ({ placeholderM, onChange, onClick }) => {
  return (
    <div className="header">
      <MeliLogo />
      <MeliSearch placeholderM={placeholderM} goOnChange={onChange} goOnClick={onClick}/>
    </div>
  );
};

MeliHeader.prototype = {
  data: PropTypes.array,
};

export default MeliHeader;
