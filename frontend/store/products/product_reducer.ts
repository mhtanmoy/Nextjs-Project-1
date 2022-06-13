import { AnyAction } from "redux";
import { AllProductListProps } from "../../utils/types/landingpage";
import { AuthRootStateType } from "../../utils/types/reduxTypes";
import {
    ALL_PRODUCT_LIST,
} from "./types";

const initialState: AllProductListProps = {
  allproducts: null,
};

export const AllProductsReducer = (
  state = initialState,
  action: AnyAction
): AllProductListProps => {
  switch (action.type) {
    case ALL_PRODUCT_LIST:
      return { ...state, allproducts: action.payload };
      
    default:
      return state;
  }
};
