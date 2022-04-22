import { actionType } from "../actiontype/actiontype";

export const setProduct = (product) => {
    return{
        type: actionType.GET_PRODUCT,
        payload: product,
    }
}