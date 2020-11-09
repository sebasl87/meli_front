// import React from "react";
import PropTypes from "prop-types";
import "./meli-breadcrumb.scss";

const MeliBreadcrumbs = ({ data }) => {
  const dataLen = data.length;
  return data.map((step, i) => {
    return <div className="d-inline-flex m16">{ step }{dataLen === i + 1 ? '' : ' > '}</div>;
  });
};

MeliBreadcrumbs.prototype = {
  data: PropTypes.array.isRequired
};

export default MeliBreadcrumbs;
