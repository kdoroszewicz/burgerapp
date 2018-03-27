import * as actionTypes from "./actionTypes";
import axios from "axios";

export const authStart = () => ({
  type: actionTypes.AUTH_START
});

export const authSuccess = authData => ({
  type: actionTypes.AUTH_SUCCESS,
  authData: authData
});

export const authFail = error => ({
  type: actionTypes.AUTH_FAIL,
  error: error
});

export const auth = (email, password) => {
  return dispatch => {
    dispatch(authStart());
    const authData = {
      email: email,
      password: password,
      returnSecureToken: true
    };
    axios
      .post(
        "https://www.googleapis.com/identitytoolkit/v3/relyingparty/signupNewUser?key=AIzaSyBh0psgYEEgZ8vbZX9IRyYnOaupH47g7wY",
        authData
      )
      .then(response => {
        console.log(response);
        dispatch(authSuccess(response));
      })
      .catch(err => {
        console.log(err);
        dispatch(authFail());
      });
  };
};
