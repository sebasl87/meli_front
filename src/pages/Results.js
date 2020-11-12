import React, { Component } from "react";
import { Loader, MeliBreadcrumb, MeliListCard } from "../Components/index";
import { connect } from "react-redux";
import { fetchItemsRequested } from "../actions/items";
import { withRouter } from "react-router-dom";

class Results extends Component {
  constructor(props) {
    super(props);
    this.props.searchIn(this.props.history.location.search.slice(3));
  }

  render() {
    
    return this.props.loader ? (
      <Loader />
    ) : (
      <div className="container mb80">
        {this.props.items.data.breadcrumb && (
          <MeliBreadcrumb data={this.props.items.data.breadcrumb} />
        )}
        <div className="rounded bg-white">
          <MeliListCard totalData={this.props.items.data.items} />
        </div>
      </div>
    );
  }
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
