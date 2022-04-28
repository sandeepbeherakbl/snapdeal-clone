import { combineReducers } from "redux";
import { productsReducer, selectedProductsReducer } from "./reducers";
import { addItems } from "./cartreducer";

const reducers = combineReducers({
  allProducts: productsReducer,
  product: selectedProductsReducer,
  addItems:addItems
});

export default reducers;