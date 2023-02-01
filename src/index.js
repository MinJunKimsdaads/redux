import { createStore } from "redux";

const add = document.getElementById('add');
const minus = document.getElementById('minus');
const number = document.querySelector('span');

const reducer = (state = 1,action) => {
    if(action.type == 'add'){
        return(
            state + 1
        )
    }else if(action.type == 'minus'){
        return(
            state - 1
        )
    }
    return state;
}

const store = createStore(reducer);

store.dispatch({type:'add'});
store.dispatch({type:'add'});
store.dispatch({type:'add'});
store.dispatch({type:'minus'});
store.dispatch({type:''});


console.log(store.getState());

