import axios from "axios";
import { Utility } from "../functions/Utility";
const BASE_URL = "http://localhost:3000/api";

//promoUser transaction list
export const FETCH_PROMO_USER = "FETCH_PROMO_USER";
export const FETCH_PROMO_USER_SUCCESS = "FETCH_PROMO_USER_SUCCESS";
export const FETCH_PROMO_USER_FAILURE = "FETCH_PROMO_USER_FAILURE";
export const UPDATE_SELECTED_PROMO_USER = "UPDATE_SELECTED_PROMO_USER";
export const UPDATE_SELECTED_ALL_PROMO_USER = "UPDATE_SELECTED_ALL_PROMO_USER";

function fakeFetchPromoUsers(page) {
  const request = JSON.parse(localStorage.getItem("PromoUsers"));
  //for emulate paging, remove this when using real api
  console.log(
    "emulate paging at promoUser action-- Remove this when using real api"
  );
  console.log(page);
  let newData = Utility.getDataByPage(request, page.page, page.size);
  const response = {
    data: newData,
    page: { ...page, count: request.length }
  };

  return new Promise(resolve => {
    setTimeout(() => resolve(response), 1000);
  });
}

function addSelectedProperty(data) {
  //console.log(data);
  let newData = data.data;
  let newObj = newData.map(obj => {
    let newObj = {
      ...obj,
      selected: false
    };

    return newObj;
  });

  return { ...data, data: newObj, isSelectedAll: false };
}

export function fetchPromoUsers(page) {
  //api version
  // const request = axios({
  //   method: "get",
  //   url: `${BASE_URL}/promoUser-transaction`,
  //   headers: ""
  // });
  //localStorage version
  return dispatch => {
    dispatch(fetchPromoUserStart());
    return fakeFetchPromoUsers(page)
      .then(response => {
        dispatch(fetchPromoUserSuccess(addSelectedProperty(response)));
      })
      .catch(error => {
        dispatch(fetchPromoUserFailure(error));
      });
  };
}

export const updateSelectedPromoUser = id => {
  return dispatch => {
    dispatch(selectedPromoUser(id));
  };
};

export const updateAllSelectedPromoUser = () => {
  return dispatch => {
    dispatch(allSelectedPromoUser());
  };
};

const fetchPromoUserStart = () => {
  return {
    type: FETCH_PROMO_USER
  };
};

const fetchPromoUserSuccess = promoUser => {
  return {
    type: FETCH_PROMO_USER_SUCCESS,
    payload: promoUser
  };
};

const fetchPromoUserFailure = error => {
  return {
    type: FETCH_PROMO_USER_FAILURE,
    payload: error
  };
};

const selectedPromoUser = id => {
  return {
    type: UPDATE_SELECTED_PROMO_USER,
    payload: id
  };
};

const allSelectedPromoUser = () => {
  return {
    type: UPDATE_SELECTED_ALL_PROMO_USER
  };
};
