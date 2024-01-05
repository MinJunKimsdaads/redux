import React from "react";
import { observer } from "mobx-react-lite";
import productStore from "./store";

const ProductList6 = observer(() => {
  const { products, cart, addToCart, removeFromCart } = productStore;

  const click = (product) => {
    const isProductInCart = cart.some((item) => item.id === product.id);

    if (isProductInCart) {
      removeFromCart(product);
    } else {
      addToCart(product);
    }
  };

  return (
    <div className="productList">
      <h2>제품 목록 MobX</h2>
      <h3>cart: {cart.map((i) => <span className="cartBox" key={i.id}>{i.name}</span>)}</h3>
      <div className="productWrap">
        {products.map((i) => {
          const activeInCart = cart.some((item) => item.id === i.id);
          const cartClass = activeInCart ? 'cartIn' : 'cartOut';
          return (
            <div key={i.id} className={`productBox ${cartClass}`} onClick={() => click(i)}>
              <div>{i.name}</div>
              <div>{i.price}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
});

export default ProductList6;
