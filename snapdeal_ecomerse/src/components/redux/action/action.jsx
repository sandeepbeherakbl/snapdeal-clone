import { ActionTypes } from "../actiontype/actiontype";

export const setProducts = (products) => {
    return {
      type: ActionTypes.SET_PRODUCTS,
      payload: products,
    };
  };
  
  export const selectedProduct = (product) => {
    return {
      type: ActionTypes.SELECTED_PRODUCT,
      payload: product,
    };
  };
  
  export const removeSelectedProduct = () => {
    return {
      type: ActionTypes.REMOVE_SELECTED_PRODUCT,
    };
  };

  export const addItem = (product) => {
    return{
      type: ActionTypes.ADDITEM,
      payload: product
    };
  };

  export const delItem = (product) => {
    return{
      type: ActionTypes.DELITEM,
      payload: product
    }
  }