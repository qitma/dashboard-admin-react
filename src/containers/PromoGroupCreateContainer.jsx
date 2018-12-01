import React from "react";
import { createPromoGroup } from "../actions/promoGroup.create";
import PromoGroupCreate from "../views/ManagePromoGroup/PromoGroupCreate";
import { connect } from "react-redux";

class PromoGroupCreateContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showModalCreate: false
    };
  }

  handleShowModal = () => {
    this.setState({ showModalCreate: true });
  };

  handleCloseModal = () => {
    this.setState({ showModalCreate: false });
  };

  render() {
    return (
      <PromoGroupCreate
        {...this.props}
        handleShowModal={this.handleShowModal}
        handleCloseModal={this.handleCloseModal}
      />
    );
  }
}

const mapStateToProps = state => {
  return {
    promoGroupList: state.promoGroups.newPromoGroup
  };
};

const mapDispatchToProps = dispatch => {
  return {
    createPromoGroup: post => {
      dispatch(createPromoGroup(post));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PromoGroupCreateContainer);
