import React, { useEffect, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";

const ProductList3 = () => {
  const products = useSelector((state) => state.products);
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const add = 'ADD_TO_CART';
  const remove = 'REMOVE_FROM_CART';
  const fetch = 'FETCH_PRODUCTS_SUCCESS';

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

  const fetchProductsSuccess = useCallback((products) => {
    dispatch({
      type: fetch,
      payload: products,
    });
  }, [dispatch, fetch]);

  const fetchProducts = useCallback(() => {
    return (dispatch) => {
      setTimeout(() => {
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

        fetchProductsSuccess(newProducts);
      }, 3000);
    };
  }, [fetchProductsSuccess]);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch, fetchProducts, cart]);

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
      <h2>제품 목록 Redux-Thunk</h2>
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

export default ProductList3;
