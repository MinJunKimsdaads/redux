import { configureStore } from "@reduxjs/toolkit";
import {roortReducer} from "./reducers2";

const store = configureStore({
    reducer:roortReducer,
});

export default store;