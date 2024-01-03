// src/redux/sagas.js
import { put, delay } from 'redux-saga/effects';
//put: 액션이 디스패치
//dalay: saga 일시 중단

const fetch = 'FETCH_PRODUCTS_SUCCESS';

const fetchProductsSuccess = (products) => ({
    type: fetch,
    payload: products,
});

export function* fetchProductsSaga(){
    yield delay(3000); // 3초 대기

    const newProducts = [
        {
          id: 1,
          name: "제품1 (fetch)",
          price: 1000,
        },
        {
          id: 2,
          name: "제품2 (fetch)",
          price: 2000,
        },
        {
          id: 3,
          name: "제품3 (fetch)",
          price: 3000,
        },
        {
          id: 4,
          name: "제품4 (fetch)",
          price: 4000,
        },
        {
          id: 5,
          name: "제품5 (fetch)",
          price: 5000,
        },
    ];

    yield put(fetchProductsSuccess(newProducts));
}

