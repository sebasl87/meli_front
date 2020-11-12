import React, { useEffect } from "react";
import { Loader, MeliBreadcrumb, MeliListCard } from "../Components/index";
import { connect } from "react-redux";
import { fetchItemsRequested } from "../actions/items";
import { withRouter } from "react-router-dom";

const Results = ({
  history,
  searchIn,
  items,
  loader
}) => {

  useEffect(() => {
    searchIn(history.location.search.slice(3))
  }, [])

  if (items) {
    return (
      <div className="container mb80">
        {items.breadcrumb && (
          <MeliBreadcrumb data={items.breadcrumb} />
        )}
        <div className="rounded bg-white">
          <MeliListCard totalData={items.items} />
        </div>
      </div>
    );
  }

  return null;
}

const mapStateToProps = (state) => {
  return {
    loader: state.data.loader,
    items: state.data.documents,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    searchIn: (query) => dispatch(fetchItemsRequested(query)),
  };
};
export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(Results)
);
