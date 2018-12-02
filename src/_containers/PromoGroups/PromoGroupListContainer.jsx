import React from "react";
import { fetchPromoGroups } from "../../_actions/promoGroup.fetch";
import PromoGroupList from "../../views/ManagePromoGroup/PromoGroupList";
import { Page } from "../../variables/Page";
import { connect } from "react-redux";

class PromoGroupListContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      page: {
        ...Page
      }
    };
  }
  componentDidMount() {
    // eslint-disable-next-line react/prop-types
    this.props.fetchPromoGroups(this.state.page);
  }

  setPage = page => {
    this.setState({ page: page });
  };

  handleChangePage = activePage => {
    console.log(activePage);
    this.setState(
      prevState => ({
        ...prevState,
        page: {
          ...prevState.page,
          page: activePage.selected
        }
      }),
      () => {
        this.props.fetchPromoGroups(this.state.page);
      }
    );
  };

  render() {
    return (
      <PromoGroupList
        {...this.props}
        handleChangePage={this.handleChangePage}
      />
    );
  }
}

const mapStateToProps = state => {
  console.log(state);
  return {
    promoGroupList: state.promoGroups.promoGroupList
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchPromoGroups: page => {
      dispatch(fetchPromoGroups(page));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PromoGroupListContainer);
