import React from "react";
import PropTypes from "prop-types";
import "./meli-card.scss";
import { MeliImg, MeliCardBody } from "../../index";

const MeliCard = ({ data, last }) => {
  return (
    <>
      <div className="container d-flex">
        <MeliImg srcI={data.picture} />
        <MeliCardBody data={data} />
      </div>
      <div className="container">
        <hr className={last ? "hide" : "mb-0 mt-0"} />
      </div>
    </>
  );
};

MeliCard.prototype = {
  data: PropTypes.shape({
    picture: PropTypes.string,
    free_shipping: PropTypes.bool,
    title: PropTypes.string,
    price: PropTypes.shape({
      currency: PropTypes.string,
      amount: PropTypes.number,
    }),
  }),
  last: PropTypes.bool,
};

export default MeliCard;
