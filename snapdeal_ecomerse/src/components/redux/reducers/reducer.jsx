import { ActionType } from "../actiontype/actionType";

const initialstate = {
    products:[]
}

export const productReducer = (state=initialstate, {type, payload}) => {
    switch (type) {
        case ActionType.SET_PRODUCTS:
            return {...state, products:payload};
        default:
            return state;
    }
};

export const selectedProductsReducer = (state = {}, { type, payload }) => {
    console.log(type);
    switch (type) {
      case ActionType.SELECTED_PRODUCTS:
        return { ...state, ...payload };
      default:
        return state;
    }
};