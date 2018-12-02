import React from "react";
import { createPromoGroup } from "../../_actions/promoGroup.create";
import ModalPromoGroup from "../../views/ManagePromoGroup/ModalPromoGroup";
import { connect } from "react-redux";

class PromoGroupCreateContainer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <ModalPromoGroup title="Add Manage Group" size="sm" {...this.props} />
    );
  }
}

const mapStateToProps = state => {
  return {
    promoGroupData: state.promoGroups.newPromoGroup
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
