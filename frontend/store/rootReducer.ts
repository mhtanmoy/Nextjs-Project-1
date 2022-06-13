
import { combineReducers } from "redux";
import { RootAppStateProps } from "../utils/types/reduxTypes";
import { AllProductsReducer } from "./products/product_reducer";
import { AuthReducer } from "./users/user_reducer";

export const combinedReducer = combineReducers<RootAppStateProps>({
  AuthReducer: AuthReducer,
  AllProductsReducer: AllProductsReducer,
});