import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import rootReducer from "../reducers";
import { fetchAllUsers } from "../actions";

export const store = createStore(rootReducer, applyMiddleware(thunk));
store.dispatch(fetchAllUsers());
