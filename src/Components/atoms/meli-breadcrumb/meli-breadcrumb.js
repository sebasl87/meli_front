// import React from "react";
import PropTypes from "prop-types";
import "./meli-breadcrumb.scss";

const MeliBreadcrumbs = ({ data }) => {
  return data.map((step) => {
    return step + " > ";
  });
};

MeliBreadcrumbs.prototype = {
  data: PropTypes.array
};

export default MeliBreadcrumbs;
