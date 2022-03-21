import {combineReducers} from "redux";
import {reducer} from "./reducers";

const reducers = combineReducers({
    allFerias: reducer,
})

export default reducers;