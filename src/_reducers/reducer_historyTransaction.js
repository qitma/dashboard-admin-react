import {
  FETCH_HISTORY_TRANSACTION,
  FETCH_HISTORY_TRANSACTION_FAILURE,
  FETCH_HISTORY_TRANSACTION_SUCCESS
} from "../_actions/historyTransaction";
import { Utility } from "../functions/Utility";

const INITIAL_STATE_HISTORY_TRANSACTION = {
  historyTransactionList: {
    historyTransactions: [],
    error: null,
    loading: false,
    page: {}
  }
};

const reducerHistoryTransaction = (
  state = INITIAL_STATE_HISTORY_TRANSACTION,
  action
) => {
  let error;
  switch (action.type) {
    case FETCH_HISTORY_TRANSACTION:
      return {
        ...state,
        historyTransactionList: {
          historyTransactions: [],
          error: null,
          loading: true,
          page: null
        }
      };
    case FETCH_HISTORY_TRANSACTION_SUCCESS: {
      let page = action.payload.page;
      page.pageCount = Utility.getCountPage(page.count, page.size);
      return {
        ...state,
        historyTransactionList: {
          historyTransactions: action.payload.data,
          error: null,
          loading: false,
          page: action.payload.page
        }
      };
    }
    case FETCH_HISTORY_TRANSACTION_FAILURE:
      error = action.payload || { message: action.payload.message };
      return {
        ...state,
        historyTransactionList: {
          historyTransactions: [],
          error: error,
          loading: false,
          page: null
        }
      };
    default:
      return state;
  }
};

export default reducerHistoryTransaction;
