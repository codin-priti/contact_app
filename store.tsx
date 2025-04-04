import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import contactReducer from "./contactReducer";

const store = createStore(contactReducer, applyMiddleware(thunk));//initialization of redux store

export default store;
