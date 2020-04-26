import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

const Store = createStore(
    rootReducer
    + window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    applyMiddleware(thunk)
);
export default Store;