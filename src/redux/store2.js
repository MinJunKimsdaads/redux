import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./reducers2";

const store2 = configureStore({
    reducer:rootReducer,
});

export default store2;