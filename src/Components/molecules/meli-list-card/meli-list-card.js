import React from "react";
import PropTypes from "prop-types";
import "./meli-list-card.scss";
import { MeliCard } from "../../index";
import { Link } from "react-router-dom";

const MeliListCard = ({ totalData }) => {
  const dataLen = totalData.length;
  return totalData.map((card, i) => {
    return (
      <Link to={`/items/${card.id}`}>
        <MeliCard
          data={card}
          key={card.id}
          last={dataLen === i + 1 ? true : false}
        />
      </Link>
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
