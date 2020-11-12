import React, { Component } from "react";
import { MeliBreadcrumb, MeliTotalDetails, Loader } from "../Components/index";
import { connect } from "react-redux";
import { fetchItemRequested } from "../actions/items";
import { withRouter } from "react-router-dom";

class Details extends Component {
  constructor(props) {
    super(props);
    this.props.searchInItem(this.props.history.location.pathname.slice(7));
  }
  render() {
    return this.props.loader ? (
      
      <Loader />
    ) : (
      <div className="container mb80">
        {this.props.item.item.breadcrumb && (
          <MeliBreadcrumb data={this.props.item.item.breadcrumb} />
        )}
        <MeliTotalDetails totalDetails={this.props.item.item} />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    loader: state.data.loader,
    item: state.data.documents.data,
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
