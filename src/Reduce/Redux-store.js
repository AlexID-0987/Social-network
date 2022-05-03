import {combineReducers, createStore} from "redux";
import bodyReducer from "./Body-reduser";
import UsersReduser from "./Users-reduser";
let reducers=combineReducers({
    Statebody:bodyReducer,
    usersPage:UsersReduser
})
let store = createStore(reducers)
window.store=store
export default  store
