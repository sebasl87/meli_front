import React from "react";
import PropTypes from "prop-types";
import "./meli-card.css";
import { MeliImg, MeliCardBody } from "../../index";

const MeliCard = ({ data, last }) => {
  return (
    <>
      <div className="container d-flex">
        <MeliImg srcI={data.picture} />
        <MeliCardBody data={data} />
      </div>
      <hr className={last ? "hide" : ""} />
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
