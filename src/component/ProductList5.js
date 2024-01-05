import React from "react";
import { useRecoilState, useSetRecoilState } from "recoil";
import { initialState5 } from "../recoil/atoms";

const ProductList5 = () => {
    const { products, cart } = useRecoilState(initialState5)[0];
    const setCart = useSetRecoilState(initialState5);

    const click = (product) => {
        // setCart 함수는 새로운 상태를 반환하는 함수이므로 함수형 업데이트 사용
        setCart((prev) => ({ ...prev, cart: [...prev.cart, product] }));
    };

    return (
        <div className="productList">
          <h2>제품 목록 Recoil</h2>
          <h3>cart: {cart.map((i) => <span key={`${i.id}`} className="cartBox">{i.name}</span>)}</h3>
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

export default ProductList5;