// import React from "react";
import PropTypes from "prop-types";
import "./meli-breadcrumb.scss";

const MeliBreadcrumbs = ({ data }) => {
  const dataLen = data.length;
  return data.map((step, i) => {
    return (
      <div
        key={step.id}
        className={
          dataLen === i + 1
            ? "d-inline-flex mb-16 mt-16 fz14 font-weight-bold grey"
            : "d-inline-flex mb-16 mt-16 fz14 grey"
        }
      >
        {step.name}
        {dataLen === i + 1 ? "" : <div className="mx-2"> &gt; </div>}
      </div>
    );
  });
};

MeliBreadcrumbs.prototype = {
  data: PropTypes.array.isRequired,
};

export default MeliBreadcrumbs;
