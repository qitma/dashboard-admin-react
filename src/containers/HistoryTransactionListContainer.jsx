import React from "react";
import { connect } from "react-redux";
import { fetchHistoryTransactions } from "../actions/historyTransaction";
import { Page } from "../variables/Page";
import HistoryTransactionList from "../views/HistoryTransaction/HistoryTransactionList";

class HistoryTransactionListContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      page: {
        ...Page
      }
    };
  }
  componentDidMount() {
    this.props.fetchHistoryTransaction(this.state.page);
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
        this.props.fetchHistoryTransaction(this.state.page);
      }
    );
  };

  render() {
    return (
      <HistoryTransactionList
        {...this.props}
        handleChangePage={this.handleChangePage}
      />
    );
  }
}

const mapStateToProps = state => {
  return {
    historyTransactionList: state.historyTransactions.historyTransactionList
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchHistoryTransaction: page => {
      dispatch(fetchHistoryTransactions(page));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HistoryTransactionListContainer);
