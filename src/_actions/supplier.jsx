import axios from "axios";
import { Utility } from "../functions/Utility";
const BASE_URL = "http://localhost:3000/api";

//supplier transaction list
export const FETCH_SUPPLIER = "FETCH_SUPPLIER";
export const FETCH_SUPPLIER_SUCCESS = "FETCH_SUPPLIER_SUCCESS";
export const FETCH_SUPPLIER_FAILURE = "FETCH_SUPPLIER_FAILURE";

function fakeFetchSuppliers(page) {
  const request = JSON.parse(localStorage.getItem("Suppliers"));
  let newData = Utility.getDataByPage(request, page.page, page.size);
  const response = {
    data: newData,
    page: { ...page, count: request.length }
  };

  return new Promise(resolve => {
    setTimeout(() => resolve(response), 2000);
  });
}

export function fetchSuppliers(page) {
  //api version
  // const request = axios({
  //   method: "get",
  //   url: `${BASE_URL}/supplier-transaction`,
  //   headers: ""
  // });
  //localStorage version
  return dispatch => {
    dispatch(fetchSupplierStart());

    return fakeFetchSuppliers(page)
      .then(response => {
        dispatch(fetchSupplierSuccess(response));
      })
      .catch(error => {
        dispatch(fetchSupplierFailure(error));
      });
  };
}

const fetchSupplierStart = () => {
  return {
    type: FETCH_SUPPLIER
  };
};

const fetchSupplierSuccess = supplier => {
  return {
    type: FETCH_SUPPLIER_SUCCESS,
    payload: supplier
  };
};

const fetchSupplierFailure = error => {
  return {
    type: FETCH_SUPPLIER_FAILURE,
    payload: error
  };
};
