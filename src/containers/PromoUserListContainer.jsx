import React from "react";
import {
  fetchPromoUsers,
  updateAllSelectedPromoUser,
  updateSelectedPromoUser
} from "../actions/promoUser";
import PromoUserList from "../views/ManagePromoUser/PromoUserList";
import { connect } from "react-redux";

class PromoUserListContainer extends React.Component {
  componentDidMount() {
    // eslint-disable-next-line react/prop-types
    this.props.fetchPromoUsers();
  }

  render() {
    //console.log(this.props);
    return <PromoUserList {...this.props} />;
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
    fetchPromoUsers: () => {
      dispatch(fetchPromoUsers());
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
