import { createSlice } from "@reduxjs/toolkit";

const initialState2 = {
    products:[
        {
            id:1,
            name:"제품1",
            price:1000,
        },
        {
            id:2,
            name:"제품2",
            price:2000,
        },
        {
            id:3,
            name:"제품3",
            price:3000,
        },
        {
            id:4,
            name:"제품4",
            price:4000,
        },
        {
            id:5,
            name:"제품5",
            price:5000,
        },
    ],
    cart:[],
}

const productSlice = createSlice({
    name:'products', //슬라이스 이름 지정
    initialState: initialState2, //초기 상태 지정
    reducers:{ //리듀서 함수 지정
        addToCart:(state, action)=>{ //함수 addToCart
            state.cart = [...state.cart, action.payload];
        },
        removeFromCart:(state, action)=>{ //함수 removeFromCart
            state.cart = state.cart.filter((i)=>{return (i.id !== action.payload.id)});
        }
    }
})

export const {addToCart, removeFromCart} = productSlice.actions; //return action functions
export default productSlice.reducer;