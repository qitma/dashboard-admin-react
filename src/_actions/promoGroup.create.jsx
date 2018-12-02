import axios from "axios";
import { Utility } from "../functions/Utility";
const BASE_URL = "http://localhost:3000/api";

//promoGroup transaction list
export const CREATE_PROMO_GROUP = "CREATE_PROMO_GROUP";
export const CREATE_PROMO_GROUP_SUCCESS = "CREATE_PROMO_GROUP_SUCCESS";
export const CREATE_PROMO_GROUP_FAILURE = "CREATE_PROMO_GROUP_FAILURE";

function fakeCreatePromoGroups(post) {
  let datas = JSON.parse(localStorage.getItem("PromoGroups"));
  let newData = {
    ...post,
    id: datas[datas.length - 1].id + 1
  };
  datas.push(newData);
  localStorage.setItem("PromoGroups", JSON.stringify(datas));
  const response = {
    data: newData
  };
  return new Promise(resolve => {
    setTimeout(() => resolve(response), 1000);
  });
}

export function createPromoGroup(post) {
  //api version
  // const request = axios({
  //   method: "get",
  //   url: `${BASE_URL}/promoGroup-transaction`,
  //   headers: ""
  // });
  //localStorage version
  return dispatch => {
    dispatch(createPromoGroupStart());

    return fakeCreatePromoGroups(post)
      .then(response => {
        dispatch(createPromoGroupSuccess(response));
      })
      .catch(error => {
        dispatch(createPromoGroupFailure(error));
      });
  };
}

const createPromoGroupStart = () => {
  return {
    type: CREATE_PROMO_GROUP
  };
};

const createPromoGroupSuccess = promoGroup => {
  return {
    type: CREATE_PROMO_GROUP_SUCCESS,
    payload: promoGroup
  };
};

const createPromoGroupFailure = error => {
  return {
    type: CREATE_PROMO_GROUP_FAILURE,
    payload: error
  };
};
