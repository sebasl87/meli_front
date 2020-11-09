import React from "react";
import PropTypes from "prop-types";
import "./meli-search.scss";
import { MeliIcon } from "../../index";
import searchIcon from "../../../Assets/ic_Search@2x.png";

const MeliSearch = ({ placeholderM, goOnChange, goOnClick }) => {
  return (
    <>
      <input placeholder={placeholderM} onChange={goOnChange} name="item" />
      <MeliIcon srcI={searchIcon} passOnClick={goOnClick} />
    </>
  );
};

MeliSearch.prototype = {
  placeholderM: PropTypes.string,
  altI: PropTypes.string,
};

export default MeliSearch;
