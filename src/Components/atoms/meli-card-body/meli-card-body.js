import React from "react";
import PropTypes from "prop-types";
import "./meli-card-body.scss";
import { MeliIcon } from "../../index";
import shipping from "../../../Assets/ic_shipping@2x.png";

const MeliCardBody = ({ data }) => {
  return (
    <div className="bodyCard clearfix mt-32">
      <div className="float-left w-75 mw60">
        <p>
          {data.price.currency} {data.price.amount}
          {data.free_shipping && <MeliIcon srcI={shipping} noBg="true" />}
        </p>
        <p>{data.title}</p>
      </div>
      <div className="float-right w-25 direccion fz12">
        <p>{data.state}</p>
      </div>
    </div>
  );
};

MeliCardBody.prototype = {
  srcI: PropTypes.string,
  altI: PropTypes.string,
};

export default MeliCardBody;
