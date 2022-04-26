import { ActionType } from "../actiontype/actionType"

export const setProduct = (products) => {
    return{
        type: ActionType.SET_PRODUCTS,
        payload: products
    };
};

export const selectedProducts = (product) => {
    return{
        type: ActionType.SELECTED_PRODUCTS,
        payload: product,
    };
};