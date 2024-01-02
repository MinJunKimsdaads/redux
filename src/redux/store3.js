import { createStore, applyMiddleware } from "redux";
import { thunk } from "redux-thunk";
import rootReducer3 from "./reducers3";

const store3 = createStore(rootReducer3, applyMiddleware(thunk));

export default store3;
