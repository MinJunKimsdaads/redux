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
    name:'products',
    initialState2,
    reducers:{
        addToCart:(state, action)=>{
            state.cart.push(action.payload);
        },
        removeFromCart:(state, action)=>{
            state.cart = state.cart.filter((i)=>{i.id !== action.payload.id});
        }
    }
})

export const {addToCart, removeFromCart} = productSlice.actions; //return action functions
export default productSlice.reducer;