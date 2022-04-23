import { actionType } from "../actiontype/actiontype";

export const setProduct = (product) => {
    return{
        type: actionType.GET_PRODUCT,
        payload: product,
    }
}

export const selectedProduct = (product) => {
    return{
        type: actionType.SELECTED_PRODUCT,
        payload: product,
    }
}

export const addCart = (product) => {
    return{
        type : "ADDCART",
        payload : product
    }
}

export const delCart = (product) => {
    return{
        type : "DELITEM",
        payload : product
    }
}


