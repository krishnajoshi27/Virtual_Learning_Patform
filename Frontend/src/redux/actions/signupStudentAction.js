/** @format */

import JwtAuthService from "../../Utils/ApiConfig";

import {
  LOGIN_ERROR,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
} from "../types/Types";
import { toast } from "react-toastify";

export const SignupRequest = (login) => ({
  type: LOGIN_REQUEST,
  payload: login,
});
export const SignupSuccess = (login) => ({
  type: LOGIN_SUCCESS,
  payload: login,
});
export const SignupFailed = (error) => ({
  type: LOGIN_ERROR,
  payload: error,
});

export const SignupApi = (data) => (dispatch) => {
  console.log('data.... ', data);
  try {
    dispatch(SignupRequest());
    JwtAuthService.loginApiService(data).then((response) => {
      console.log('data......sss.... ',  response)
      if (response?.status) {
        toast.success(`${response?.data?.message}`);
        dispatch(SignupSuccess(response));
      } else {
        dispatch(SignupFailed(response));
      }
    });
  } catch (error) {
    dispatch(SignupFailed(error));
  }
};

