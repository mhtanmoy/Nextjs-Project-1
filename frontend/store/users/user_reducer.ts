import { AnyAction } from "redux";
import { AuthRootStateType } from "../../utils/types/reduxTypes";
import {
  LOGIN_ACTION,
  LOGOUT_ACTION,
  SAVE_USERINFO_ACTION,
} from "./types";

const initialState: AuthRootStateType = {
  isLoggedIn: false,
  userInfo: null,
};

export const AuthReducer = (
  state = initialState,
  action: AnyAction
): AuthRootStateType => {
  switch (action.type) {
    case LOGIN_ACTION:
      return { ...state, isLoggedIn: action.payload };
    case SAVE_USERINFO_ACTION:
      return { ...state, userInfo: action.payload };
    case LOGOUT_ACTION:
      return { ...state, isLoggedIn: action.payload, userInfo: null };
      
    default:
      return state;
  }
};
