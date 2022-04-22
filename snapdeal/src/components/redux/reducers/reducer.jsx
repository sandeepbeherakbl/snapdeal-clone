import { actionType } from "../actiontype/actiontype";

const initalstate = {
    product: []
}

export const reducerproduct = (state= initalstate, {type, payload}) => {
    switch (type) {
        case actionType.GET_PRODUCT:
            return {...state, product:payload};
    
        default:
            return state;
    }

}