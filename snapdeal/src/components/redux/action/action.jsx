import { actionType } from "../actiontype/actiontype";

export const setProduct = (product) => {
    return{
        type: actionType.GET_PRODUCT,
        payload: product,
    }
}

const selectedProduct = (product) => {
    return{
        type: actionType.SELECTED_PRODUCT,
        payload: product,
    }
}

export default selectedProduct;