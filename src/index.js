import { createStore } from "redux";

// const add = document.getElementById('add');
// const minus = document.getElementById('minus');
// const number = document.querySelector('span');

// const add1 = 'add';
// const minus1 = 'minus';

const form = document.querySelector('form');
const input = document.querySelector('input');
const ul = document.querySelector('ul');



const ADD_TODO =  'ADD_TODO';
const DELETE_TODO = 'DELETE_TODO';

const reducer = (state=[],action) => {
    // if(action.type == 'add'){
    //     return(
    //         state + 1
    //     )
    // }else if(action.type == 'minus'){
    //     return(
    //         state - 1
    //     )
    // }else{
    //     return state;
    // }
    
    // switch(action.type){
    //     case 'add':
    //         return state + 1
    //     case 'minus':
    //         return state - 1
    //     default:
    //         return state
    // }

    console.log(action);

    switch(action.type){
        case ADD_TODO:
            return []
        case DELETE_TODO:
            return []
        default :
            return []
    }
}


const store = createStore(reducer);

const onSubmit = e => {
    e.preventDefault();
    const toDo = input.value;
    input.value = "";
    store.dispatch({type:ADD_TODO,context:toDo});
}

form.addEventListener('submit',onSubmit);


// const handleAdd = () => {
//     store.dispatch({type:add1});
// }

// const handleMinus = () => {
//     store.dispatch({type:minus1});
// }

// add.addEventListener('click',handleAdd);
// minus.addEventListener('click',handleMinus);

// const onChange = () => {
//     number.innerText = store.getState();
// }
// store.subscribe(onChange);

