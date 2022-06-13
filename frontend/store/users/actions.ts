import {
    UserLoginProps,
    userSignupProps,
  } from "../../utils/types/reduxTypes";
  import {
    LOGIN_ACTION,
    LOGOUT_ACTION,
    SAVE_USERINFO_ACTION,
    SIGNUP_ACTION,
  } from "./types";
  
  export const loginAction = (value: boolean) => {
    return (dispatch: (arg0: { type: string; payload: boolean }) => void) => {
      dispatch({
        type: LOGIN_ACTION,
        payload: value,
      });
    };
  };
  
  export const saveUserinfoAction = (userinfo: UserLoginProps) => {
    return (
      dispatch: (arg0: { type: string; payload: UserLoginProps }) => void
    ) => {
      dispatch({
        type: SAVE_USERINFO_ACTION,
        payload: userinfo,
      });
    };
  };
  
  export const logoutAction = (value: boolean) => {
    return (dispatch: (arg0: { type: string; payload: boolean }) => void) => {
      localStorage.removeItem('userInfo')
      dispatch({
        type: LOGOUT_ACTION,
        payload: value,
      });
    };
  };
  
  export const signupAction = (value: boolean) => {
    return (dispatch: (arg0: { type: string; payload: boolean }) => void) => {
      dispatch({
        type: SIGNUP_ACTION,
        payload: value,
      });
    };
  };
