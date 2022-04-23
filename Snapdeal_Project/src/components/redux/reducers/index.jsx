import {combineReducers} from "redux";
import { reducerproduct, reducerselected,handleCart } from "./reducer";
 

const reducer = combineReducers({
    allreducer: reducerproduct,
    product: reducerselected,
    cart: handleCart,
    
});

export default reducer;