import React from "react";
import {
  fetchPromoUsers,
  updateAllSelectedPromoUser,
  updateSelectedPromoUser
} from "../../_actions/promoUser";
import PromoUserList from "../../views/ManagePromoUser/PromoUserList";
import { Page } from "../../variables/Page";
import { connect } from "react-redux";

class PromoUserListContainer extends React.Component {
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
    this.props.fetchPromoUsers(this.state.page);
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
        this.props.fetchPromoUsers(this.state.page);
      }
    );
  };

  render() {
    //console.log(this.props);
    return (
      <PromoUserList {...this.props} handleChangePage={this.handleChangePage} />
    );
  }
}

const mapStateToProps = state => {
  //console.log(state);
  return {
    promoUserList: state.promoUsers.promoUserList
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchPromoUsers: Page => {
      dispatch(fetchPromoUsers(Page));
    },
    updateSelectedPromoUser: id => {
      dispatch(updateSelectedPromoUser(id));
    },
    updateAllPromoUser: () => {
      dispatch(updateAllSelectedPromoUser());
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PromoUserListContainer);
