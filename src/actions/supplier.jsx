import axios from "axios";
const BASE_URL = "http://localhost:3000/api";

//supplier transaction list
export const FETCH_SUPPLIER = "FETCH_SUPPLIER";
export const FETCH_SUPPLIER_SUCCESS = "FETCH_SUPPLIER_SUCCESS";
export const FETCH_SUPPLIER_FAILURE = "FETCH_SUPPLIER_FAILURE";

function fakeFetchSuppliers() {
  const request = JSON.parse(localStorage.getItem("Suppliers"));
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

export function fetchSuppliers() {
  //api version
  // const request = axios({
  //   method: "get",
  //   url: `${BASE_URL}/supplier-transaction`,
  //   headers: ""
  // });
  //localStorage version
  return dispatch => {
    dispatch(fetchSupplierStart());

    return fakeFetchSuppliers()
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
