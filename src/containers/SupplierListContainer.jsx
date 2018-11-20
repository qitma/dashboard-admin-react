import React from "react";
import { fetchSuppliers } from "../actions/supplier";
import SupplierList from "../views/ManageSupplier/SupplierList";
import { connect } from "react-redux";

class SupplierListContainer extends React.Component {
  componentDidMount() {
    // eslint-disable-next-line react/prop-types
    this.props.fetchSuppliers();
  }

  render() {
    return <SupplierList {...this.props} />;
  }
}

const mapStateToProps = state => {
  console.log(state);
  return {
    supplierList: state.suppliers.supplierList
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchSuppliers: () => {
      dispatch(fetchSuppliers());
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SupplierListContainer);
