import { ADD_USER, UPDATE_USER, FETCH_USER, DELETE_USER } from "./types";
//import axios from "axios";

//const apiUrl = "http//localhost:4000/users";

export const createUser = user => {
  return dispatch => {
    let users = JSON.parse(localStorage.getItem("Users"));
    users.push(user);
    localStorage.setItem("Users", JSON.stringify(users));
    let response = {
      data: user,
      loading: false,
      error: null
    };
    return dispatch(createUserSuccess(response));
  };
};

export const createUserSuccess = data => {
  return {
    type: ADD_USER,
    payload: {
      data
    }
  };
};

export const fetchUsers = users => {
  return {
    type: FETCH_USER,
    payload: {
      users
    }
  };
};

export const fetchAllUsers = () => {
  return dispatch => {
    let users = JSON.parse(localStorage.getItem("Users"));
    let response = {
      data: users,
      loading: false,
      error: null
    };
    return dispatch(fetchUsers(response));
  };
};
