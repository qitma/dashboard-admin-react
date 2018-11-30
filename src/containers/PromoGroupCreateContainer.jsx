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

  render() {
    return <PromoGroupCreate {...this.props} />;
  }
}

const mapStateToProps = state => {
  return {
    promoGroupList: state.promoGroups.newPromoGroup
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchPromoGroups: data => {
      dispatch(createPromoGroup(data));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PromoGroupCreateContainer);
