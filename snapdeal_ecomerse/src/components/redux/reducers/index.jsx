import {combineReducers} from "redux";
import {productReducer, selectedProductsReducer } from "./reducer"

const reducers = combineReducers({
    product:productReducer,
    selectedproduct:selectedProductsReducer,
});

export default reducers;