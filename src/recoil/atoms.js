import { atom } from "recoil";

export const initialState5 = atom({
    key:'initialState5',
    default:{
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
})