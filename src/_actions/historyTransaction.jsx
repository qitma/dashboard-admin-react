import axios from "axios";
import { Utility } from "../functions/Utility";
const BASE_URL = "http://localhost:3000/api";

//history transaction list
export const FETCH_HISTORY_TRANSACTION = "FETCH_HISTORY_TRANSACTION";
export const FETCH_HISTORY_TRANSACTION_SUCCESS =
  "FETCH_HISTORY_TRANSACTION_SUCCESS";
export const FETCH_HISTORY_TRANSACTION_FAILURE =
  "FETCH_HISTORY_TRANSACTION_FAILURE";

function fakeFetchHistoryTransactions(page) {
  const request = JSON.parse(localStorage.getItem("HistoryTransactions"));
  let newData = Utility.getDataByPage(request, page.page, page.size);
  const response = {
    data: newData,
    page: { ...page, count: request.length }
  };

  return new Promise(resolve => {
    setTimeout(() => resolve(response), 2000);
  });
}

export function fetchHistoryTransactions(page) {
  //api version
  // const request = axios({
  //   method: "get",
  //   url: `${BASE_URL}/history-transaction`,
  //   headers: ""
  // });
  //localStorage version
  return dispatch => {
    dispatch(fetchHistoryTransactionStart());

    return fakeFetchHistoryTransactions(page)
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
