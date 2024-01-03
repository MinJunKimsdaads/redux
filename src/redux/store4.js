import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "@redux-saga/core";
import rootReducer4 from "./reducers4";
import { fetchProductsSaga } from "./sagas";

const sagaMiddleware = createSagaMiddleware(); //미들웨어 생성

const store4 = createStore(rootReducer4, applyMiddleware(sagaMiddleware)); //미들웨어 적용

sagaMiddleware.run(fetchProductsSaga); //saga 실행

//제너레이터 함수의 각 yield를 처리하면서 다음 yield로 넘어감 

export default store4;
