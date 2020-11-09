import React from "react";
import PropTypes from "prop-types";
import "./meli-list-card.css";
import { MeliCard } from "../../index";

const MeliListCard = ({ totalData }) => {
  const dataLen = totalData.length;
  return totalData.map((card, i) => {
    return (
      <MeliCard
        data={card}
        key={card.id}
        last={dataLen === i + 1 ? true : false}
      />
    );
  });
};

MeliListCard.prototype = {
  totalData: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      picture: PropTypes.string,
      free_shipping: PropTypes.bool,
      title: PropTypes.string,
      price: PropTypes.shape({
        currency: PropTypes.string,
        amount: PropTypes.number,
      }),
    })
  ),
};

export default MeliListCard;
