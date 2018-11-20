import axios from "axios";
const BASE_URL = "http://localhost:3000/api";

//history transaction list
export const FETCH_HISTORY_TRANSACTION = "FETCH_HISTORY_TRANSACTION";
export const FETCH_HISTORY_TRANSACTION_SUCCESS =
  "FETCH_HISTORY_TRANSACTION_SUCCESS";
export const FETCH_HISTORY_TRANSACTION_FAILURE =
  "FETCH_HISTORY_TRANSACTION_FAILURE";

function fakeFetchHistoryTransactions() {
  const request = JSON.parse(localStorage.getItem("HistoryTransactions"));
  const page = {
    activePage: 0,
    size: 5,
    count: request.length,
    pageCount: 0
  };
  const response = {
    data: request,
    page: { ...page }
  };

  return new Promise(resolve => {
    setTimeout(() => resolve(response), 2000);
  });
}

export function fetchHistoryTransactions() {
  //api version
  // const request = axios({
  //   method: "get",
  //   url: `${BASE_URL}/history-transaction`,
  //   headers: ""
  // });
  //localStorage version
  return dispatch => {
    dispatch(fetchHistoryTransactionStart());

    return fakeFetchHistoryTransactions()
      .then(response => {
        dispatch(fetchHistoryTransactionSuccess(response));
      })
      .catch(error => {
        dispatch(fetchHistoryTransactionFailure(error));
      });
  };
}

const fetchHistoryTransactionStart = () => {
  return {
    type: FETCH_HISTORY_TRANSACTION
  };
};

const fetchHistoryTransactionSuccess = history => {
  return {
    type: FETCH_HISTORY_TRANSACTION_SUCCESS,
    payload: history
  };
};

const fetchHistoryTransactionFailure = error => {
  return {
    type: FETCH_HISTORY_TRANSACTION_FAILURE,
    payload: error
  };
};
