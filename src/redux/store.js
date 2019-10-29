import { createStore, combineReducers, applyMiddleware} from "redux";
import promise from "redux-promise-middleware";
import userReducer from "./UserReducer";
import postReducer from "./PostReducer";

const rootReducer = combineReducers({
    userReducer,
    postReducer
});

export default createStore(rootReducer, applyMiddleware(promise));