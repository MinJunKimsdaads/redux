const initialState4 = {
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

const rootReducer4 = (state=initialState4,action) => {
    switch(action.type){
        case 'ADD_TO_CART':
            return{
                ...state,
                cart:[...state.cart,action.payload],
            };
        case 'REMOVE_FROM_CART':
            return{
                ...state,
                cart:state.cart.filter((i)=>{
                    return (i.id !== action.payload.id)
                })
            };
        case 'FETCH_PRODUCTS_SUCCESS':
            return{
                ...state,
                products: action.payload,
            }
        default:
            return state;
    }
}

export default rootReducer4;
