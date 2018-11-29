import axios from "axios";
import { Utility } from "../functions/Utility";
const BASE_URL = "http://localhost:3000/api";

//supplier transaction list
export const FETCH_PROMO_GROUP = "FETCH_PROMO_GROUP";
export const FETCH_PROMO_GROUP_SUCCESS = "FETCH_PROMO_GROUP_SUCCESS";
export const FETCH_PROMO_GROUP_FAILURE = "FETCH_PROMO_GROUP_FAILURE";

function fakeFetchPromoGroups(page) {
  const request = JSON.parse(localStorage.getItem("PromoGroups"));
  let newData = Utility.getDataByPage(request, page.page, page.size);
  const response = {
    data: newData,
    page: { ...page, count: request.length }
  };

  return new Promise(resolve => {
    setTimeout(() => resolve(response), 2000);
  });
}

export function fetchPromoGroups(page) {
  //api version
  // const request = axios({
  //   method: "get",
  //   url: `${BASE_URL}/supplier-transaction`,
  //   headers: ""
  // });
  //localStorage version
  return dispatch => {
    dispatch(fetchPromoGroupStart());

    return fakeFetchPromoGroups(page)
      .then(response => {
        dispatch(fetchPromoGroupSuccess(response));
      })
      .catch(error => {
        dispatch(fetchPromoGroupFailure(error));
      });
  };
}

const fetchPromoGroupStart = () => {
  return {
    type: FETCH_PROMO_GROUP
  };
};

const fetchPromoGroupSuccess = supplier => {
  return {
    type: FETCH_PROMO_GROUP_SUCCESS,
    payload: supplier
  };
};

const fetchPromoGroupFailure = error => {
  return {
    type: FETCH_PROMO_GROUP_FAILURE,
    payload: error
  };
};
