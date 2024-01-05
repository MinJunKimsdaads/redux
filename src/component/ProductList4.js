import React from "react";
import { useSelector, useDispatch } from "react-redux";

const ProductList4 = () => {
  const products = useSelector((state) => state.products);
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const add = 'ADD_TO_CART';
  const remove = 'REMOVE_FROM_CART';

  const addToCart = (product) => {
    dispatch({
      type: add,
      payload: product,
    });
  };

  const removeFromCart = (product) => {
    dispatch({
      type: remove,
      payload: product,
    });
  };

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
      <h2>제품 목록 Redux-Saga</h2>
      <h3>cart: {cart.map((i)=>{return(<span className="cartBox">{i.name}</span>)})}</h3>
      <div className="productWrap">
        {products.map((i) => {
          const activeInCart = cart.some((item) => item.id === i.id);
          const cartClass = activeInCart ? 'cartIn' : 'cartOut';
          return (
            <div
              key={i.id}
              className={`productBox ${cartClass}`}
              onClick={() => {
                click(i);
              }}
            >
              <div>{i.name}</div>
              <div>{i.price}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProductList4;
