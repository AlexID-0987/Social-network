import {combineReducers, createStore} from "redux";
import bodyReducer from "./Body-reduser";
let reducers=combineReducers({
    Statebody:bodyReducer
})
let store = createStore(reducers)
export default  store
