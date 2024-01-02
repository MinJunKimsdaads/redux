import React, {useEffect} from "react";
import { useSelector, useDispatch } from "react-redux";

const ProductList3=()=>{
    const products = useSelector(state=>state.products); //return initialState.products
    const cart = useSelector(state=>state.cart); //return initialState.cart
    const dispatch = useDispatch();

    const add = 'ADD_TO_CART';
    const remove = 'REMOVE_FROM_CART';
    const fetch = 'FETCH_PRODUCTS_SUCCESS';

    const addToCart = product => {
        dispatch({
            type:add,
            payload:product,
        })
    }

    const removeFromCart = product => {
        dispatch({
            type:remove,
            payload:product,
        })
    }

    const fetchProductsSuccess = products => {
        dispatch({
            type:fetch,
            payload:products,
        })
    }

    const fetchProducts = () => {
        return (dispatch)=>{
            setTimeout(()=>{
                const newProducts = [
                    {
                        id:1,
                        name:"제품1 (fetch)",
                        price:1000,
                    },
                    {
                        id:2,
                        name:"제품2 (fetch)",
                        price:2000,
                    },
                    {
                        id:3,
                        name:"제품3 (fetch)",
                        price:3000,
                    },
                    {
                        id:4,
                        name:"제품4 (fetch)",
                        price:4000,
                    },
                    {
                        id:5,
                        name:"제품5 (fetch)",
                        price:5000,
                    },
                ]

                fetchProductsSuccess(newProducts); //액션 객체를 인자로 받음 
            },3000)
        }
    }

    useEffect(()=>{
        dispatch(fetchProducts());
        console.log(cart);
    },[dispatch]);

    const click = (product) => {
        const isProductInCart = cart.some((item) => item.id === product.id);
        

        if(isProductInCart){
            removeFromCart(product);
        }else{
            addToCart(product);
        }

        console.log(cart);
    }

    return(
        <div className="productList">
            <h1>제품 목록 Redux-Thunk</h1>
            <div className="productWrap">
                {products.map((i)=>{
                    const activeInCart = cart.some((item) => item.id === i.id);
                    const cartClass = activeInCart ? 'cartIn' : 'cartOut';
                    return(
                        <div key={i.id} className={`productBox ${cartClass}`} onClick={()=>{click(i)}}>
                            <div>{i.name}</div>
                            <div>{i.price}</div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default ProductList3;