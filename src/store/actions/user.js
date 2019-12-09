import * as actionTypes from "./actionTypes";
import axios from "../../axios-users";

export const changeProfileSuccess = (userId, userData) => {
  return {
    type: actionTypes.CHANGE_PROFILE_SUCCESS,
    userId,
    userData
  };
};

export const changeProfileFail = error => {
  return {
    type: actionTypes.CHANGE_PROFILE_FAIL,
    error
  };
};

export const changeProfileStart = () => {
  return {
    type: actionTypes.CHANGE_PROFILE_START
  };
};

export const changeProfile = (userData, userKey, token) => {
  console.log(userData);
  return dispatch => {
    dispatch(changeProfileStart());
    axios
      .put(`/users/${userKey}.json?auth=${token}`, userData)
      //.post("/users.json", userData)
      .then(response => {
        dispatch(changeProfileSuccess(response.data.name, userData));
      })
      .catch(error => {
        dispatch(changeProfileFail(error));
      });
  };
};

export const changeProfileInit = () => {
  return {
    type: actionTypes.CHANGE_PROFILE_INIT
  };
};

export const fetchUserSuccess = user => {
  return {
    type: actionTypes.FETCH_USER_SUCCESS,
    user
  };
};

export const fetchUserFail = error => {
  return {
    type: actionTypes.FETCH_USER_FAIL,
    error
  };
};

export const fetchUserStart = () => {
  return {
    type: actionTypes.FETCH_USER_START
  };
};

export const fetchUser = (token, userId) => {
  return dispatch => {
    dispatch(fetchUserStart());
    const queryParams = `?auth=${token}&orderBy="userId"&equalTo="${userId}"`;
    axios
      .get("/users.json" + queryParams)
      .then(res => {
        const fetchedUser = [];
        for (let key in res.data) {
          fetchedUser.push({
            ...res.data[key],
            userKey: key
          });
        }
        console.log("fetchedUser", fetchedUser[0]);
        dispatch(fetchUserSuccess(fetchedUser[0]));
      })
      .catch(err => {
        dispatch(fetchUserFail(err));
      });
  };
};
