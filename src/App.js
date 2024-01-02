import React from "react";
import { Provider } from "react-redux";
import store1 from "./redux/store1";
import store2 from "./redux/store2";
import store3 from "./redux/store3";
import ProductList1 from "./component/ProductList1";
import ProductList2 from "./component/ProductList2";
import ProductList3 from "./component/ProductList3";
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
      
    </div>
  );
}

export default App;
