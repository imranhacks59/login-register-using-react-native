import { applyMiddleware, combineReducers, createStore } from "redux";
import UserReducer from "./reducer/userReducer";
import thunk from "redux-thunk";

const middleware = [thunk]

const reducer = combineReducers({
    user:UserReducer
})

const store = createStore(
    reducer,
    applyMiddleware(...middleware)
)

export default store