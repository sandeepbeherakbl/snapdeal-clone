import {combineReducers} from "redux";
import { reducerproduct } from "./reducer";

const reducer = combineReducers({
    allreducer: reducerproduct,
});

export default reducer;