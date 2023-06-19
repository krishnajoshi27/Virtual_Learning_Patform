/** @format */

import JwtAuthService from "../../Utils/ApiConfig";

import {
  LOGIN_ERROR,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
} from "../types/Types";
import { toast } from "react-toastify";

export const LoginRequest = (login) => ({
  type: LOGIN_REQUEST,
  payload: login,
});
export const LoginSuccess = (login) => ({
  type: LOGIN_SUCCESS,
  payload: login,
});
export const LoginFailed = (error) => ({
  type: LOGIN_ERROR,
  payload: error,
});

export const LoginApi = (data) => (dispatch) => {
  console.log('data.... ', data);
  try {
    dispatch(LoginRequest());
    JwtAuthService.loginApiService(data).then((response) => {
      console.log('data......sss.... ',  response)
      if (response?.status) {
        toast.success(`${response?.data?.message}`);
        dispatch(LoginSuccess(response));
      } else {
        dispatch(LoginFailed(response));
        // if (
        //   response?.response?.data?.message === "Email/Phone Number not found."
        // ) {
        //   toast.error("Email id not found");
        // } else {
        //   toast.error(`${response?.response?.data?.message}`);
        // }
      }
    });
  } catch (error) {
    dispatch(LoginFailed(error));
  }
};

