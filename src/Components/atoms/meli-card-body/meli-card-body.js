import React from "react";
import PropTypes from "prop-types";
import "./meli-card-body.css";
import { MeliIcon } from "../../index";
import shipping from "../../../Assets/ic_shipping@2x.png";

const MeliCardBody = ({ data }) => {
  return (
    <div className="bodyCard">
      <p>
        {data.price.currency} {data.price.amount}
        {data.free_shipping && <MeliIcon srcI={shipping} noBg="true"/>}
      </p>
      <p>{data.title}</p>
    </div>
  );
};

MeliCardBody.prototype = {
  srcI: PropTypes.string,
  altI: PropTypes.string,
};

export default MeliCardBody;
