import React from "react";
import { connect } from "react-redux";
import { fetchHistoryTransactions } from "../actions/historyTransaction";

import HistoryTransactionList from "../views/HistoryTransaction/HistoryTransactionList";

class HistoryTransactionListContainer extends React.Component {
  componentDidMount() {
    this.props.fetchHistoryTransaction();
  }

  render() {
    return <HistoryTransactionList {...this.props} />;
  }
}

const mapStateToProps = state => {
  return {
    historyTransactionList: state.historyTransactions.historyTransactionList
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchHistoryTransaction: () => {
      dispatch(fetchHistoryTransactions());
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HistoryTransactionListContainer);
