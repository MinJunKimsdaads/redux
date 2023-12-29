import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addToCart, removeFromCart } from "../redux/reducers2";

const ProductList2=()=>{
    const products = useSelector(state=>state.products); //return initialState.products
    const cart = useSelector(state=>state.cart); //return initialState.cart
    const dispatch = useDispatch();

    const click = (product) => {
        const isProductInCart = cart.some((item) => item.id === product.id);

        if(isProductInCart){
            removeFromCart(product);
        }else{
            addToCart(product);
        }
    }

    return(
        <div className="productList">
            <h1>제품 목록 Redux-Tookit</h1>
            <div className="productWrap">
                {products.map((i)=>{
                    return(
                        <div key={i.id} className="productBox" onClick={()=>{click(i)}}>
                            <div>{i.name}</div>
                            <div>{i.price}</div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default ProductList2;