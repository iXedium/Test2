import * as actionTypes from "../actions/actionTypes";
import { updateObject } from "../../shared/utility";

const initialState = {
  first: null,
  last: null,
  email: null,
  admin: null,
  userKey: null,
  loading: false,
  changed: false
};

const changeProfileInit = (state, action) => {
  return updateObject(state, { changed: false });
};

const changeProfileStart = (state, action) => {
  return updateObject(state, { loading: true });
};

const changeProfileSuccess = (state, action) => {
  const newUser = updateObject(action.userData, { id: action.userId });
  return updateObject(state, {
    loading: false,
    changed: true,
    users: state.users.concat(newUser)
  });
  
};

const changeProfileFail = (state, action) => {
  return updateObject(state, { loading: false });
};

const fetchUserStart = (state, action) => {
  return updateObject(state, { loading: true });
};

const fetchUserSuccess = (state, action) => {
  return updateObject(state, {
    first: action.user.first,
    last: action.user.last,
    email: action.user.email,
    admin: action.user.admin,
    userKey: action.user.userKey,
    loading: false
  });
};

const fetchUserFail = (state, action) => {
  return updateObject(state, { loading: false });
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.CHANGE_PROFILE_INIT:
      return changeProfileInit(state, action);
    case actionTypes.CHANGE_PROFILE_START:
      return changeProfileStart(state, action);
    case actionTypes.CHANGE_PROFILE_SUCCESS:
      return changeProfileSuccess(state, action);
    case actionTypes.CHANGE_PROFILE_FAIL:
      return changeProfileFail(state, action);
    case actionTypes.FETCH_USER_START:
      return fetchUserStart(state, action);
    case actionTypes.FETCH_USER_SUCCESS:
      return fetchUserSuccess(state, action);
    case actionTypes.FETCH_USER_FAIL:
      return fetchUserFail(state, action);
    default:
      return state;
  }
};

export default reducer;
