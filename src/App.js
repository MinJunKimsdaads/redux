import React from "react";
import { Provider } from "react-redux";
import store1 from "./redux/store1"; //redux
import store2 from "./redux/store2"; //redux-Toolkit
import store3 from "./redux/store3"; //redux-thunk
import store4 from "./redux/store4"; //redux-saga
import ProductList1 from "./component/ProductList1";
import ProductList2 from "./component/ProductList2";
import ProductList3 from "./component/ProductList3";
import ProductList4 from "./component/ProductList4";
import ProductList5 from "./component/ProductList5";

import { RecoilRoot } from "recoil";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Provider store={store1}>
        <ProductList1></ProductList1>
      </Provider>
      
      <Provider store={store2}>
        <ProductList2></ProductList2>
      </Provider>

      <Provider store={store3}>
        <ProductList3></ProductList3>
      </Provider>

      <Provider store={store4}>
        <ProductList4></ProductList4>
      </Provider>

      <RecoilRoot>
        <ProductList5></ProductList5>
      </RecoilRoot>
      
    </div>
  );
}

export default App;
