import React, { useEffect } from "react";
import { MeliBreadcrumb, MeliTotalDetails, Loader } from "../Components/index";
import { connect } from "react-redux";
import { fetchItemRequested } from "../actions/items";
import { withRouter } from "react-router-dom";

const Details = ({
  history,
  searchInItem,
  loader,
  ...props
}) => {
    useEffect(() => {
        searchInItem(history.location.pathname.slice(7));
    }, []);

    if(loader || !props.item) {
        return (
            <Loader />
        );
    }

    const {breadcrumb} = props.item

    return (
        <div className="container mb80">
            {breadcrumb && (
                <MeliBreadcrumb data={breadcrumb} />
            )}
            <MeliTotalDetails totalDetails={props.item} />
        </div>
    );
}

const mapStateToProps = (state) => {
  return {
    loader: state.data.loader,
    ...state.data.item,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    searchInItem: (item) => dispatch(fetchItemRequested(item)),
  };
};

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(Details)
);
