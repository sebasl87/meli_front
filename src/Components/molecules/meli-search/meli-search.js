import React from "react";
import PropTypes from "prop-types";
import "./meli-search.css";
import {MeliIcon} from "../../index";
import searchIcon from "../../../Assets/ic_Search@2x.png";

const MeliSearch = ({ placeholderM }) => {
    return(
  <>
    <input placeholder={placeholderM} />
    <MeliIcon srcI={searchIcon} />
  </>)
};

MeliSearch.prototype = {
  placeholderM: PropTypes.string,
  altI: PropTypes.string,
};

export default MeliSearch;
