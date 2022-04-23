import { actionType } from "../actiontype/actiontype";

const initalstate = {
    product: [],
    cart : []
}

export const reducerproduct = (state= initalstate, {type, payload}) => {
    switch (type) {
        case actionType.GET_PRODUCT:
            return {...state, product:payload};
        default:
            return state;
    }
}

export const reducerselected = (state = {} , {type,payload}) => {
    switch(type){
        case actionType.SELECTED_PRODUCT:
            return{...state, ...payload}
        default:
            return state;
    }
}

 const cart = []

export const handleCart = (state = cart, action) => {
    const product = action.payload;
        switch (action.type) {
            case actionType.ADDITEM:
                const add = state.find((e) =>
                e.id === product.id);
                if(add){
                    return state.map((e) => 
                    e.id === product.id ? {...e, qty: e.qty+1} : e
                    );
                }else{
                    const product = action.payload;
                    return[
                        ...state,{...product,qty:1,}
                    ]
                }
                break;
            
            case "DELITEM":
                const del = state.find((e) => 
                e.id === product.id);
                if(del.qty === 1){
                    return state.filter((x) => x.id !== del.id);
                }else{
                    return state.map((e)=>
                    e.id === product.id ? {...e, qty:e.qty-1} : e)
                };
        
            default:
                return state;
        }
    }
