import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import rootReducer from "../reducers";

// export const store = createStore(rootReducer, applyMiddleware(thunk));
// store.dispatch(fetchAllUsers());

export default function configureStore(initialState) {
  const finalCreateStore = compose(applyMiddleware(thunk))(createStore);

  const store = finalCreateStore(rootReducer, initialState);

  return store;
}
