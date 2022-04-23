import {combineReducers} from "redux";
import { reducerproduct, reducerselected } from "./reducer";
import {CartReducer} from "./cartreducer"

const reducer = combineReducers({
    allreducer: reducerproduct,
    product: reducerselected,
    cart: CartReducer,
});

export default reducer;