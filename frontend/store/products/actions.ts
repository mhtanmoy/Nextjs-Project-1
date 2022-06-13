import { AllProductListProps, SingleProductProps } from "../../utils/types/landingpage";
import { ALL_PRODUCT_LIST } from "./types";

export const allProductsListAction = (allproducts: AllProductListProps) => {
    return (
      dispatch: (arg0: { type: string; payload: AllProductListProps }) => void
    ) => {
      dispatch({
        type: ALL_PRODUCT_LIST,
        payload: allproducts,
      });
    };
  };

  