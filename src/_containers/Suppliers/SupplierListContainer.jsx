import React from "react";
import { fetchSuppliers } from "../../_actions/supplier";
import SupplierList from "../../views/ManageSupplier/SupplierList";
import { Page } from "../../variables/Page";
import { connect } from "react-redux";

class SupplierListContainer extends React.Component {
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
    this.props.fetchSuppliers(this.state.page);
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
        this.props.fetchSuppliers(this.state.page);
      }
    );
  };

  render() {
    return (
      <SupplierList {...this.props} handleChangePage={this.handleChangePage} />
    );
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
    fetchSuppliers: page => {
      dispatch(fetchSuppliers(page));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SupplierListContainer);
