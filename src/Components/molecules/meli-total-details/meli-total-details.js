import React from "react";
import PropTypes from "prop-types";
import "./meli-total-details.scss";
import { MeliImg, MeliDetail, MeliDescription } from "../../index";

const MeliTotalDetails = ({ totalDetails }) => {
  return (
    <>
      <div className="rounded-top bg-white pb-32">
        <div className="clearfix">
          <div className="w-75 float-left">
            <MeliImg max="true" srcI={totalDetails.picture} />
          </div>
          <div className="w-25 float-right">
            <MeliDetail itemDetail={totalDetails} />
          </div>
        </div>
        <div className="w-75">
          <MeliDescription itemDescription={totalDetails.description} />
        </div>
      </div>
    </>
  );
};

MeliTotalDetails.prototype = {
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

export default MeliTotalDetails;
