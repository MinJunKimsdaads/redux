// import { createStore } from "redux";

// const form = document.querySelector('form');
// const input = document.querySelector('input');
// const ul = document.querySelector('ul');

// const ADD_TODO =  'ADD_TODO';
// const DELETE_TODO = 'DELETE_TODO';

// const addToDo = (context) => {
//     return {
//         type:ADD_TODO,
//         context:context
//     }
// }

// const deleteToDo = (id) => {
//     return {
//         type:DELETE_TODO,
//         id:id
//     }
// }

// const reducer = (state=[],action) => {
//     switch(action.type){
//         case ADD_TODO:
//             return [{text:action.context, id:Date.now()},...state]
//         case DELETE_TODO:
//             return state.filter(element=>element.id !== action.id);
//         default :
//             return []
//     }
// }
// const store = createStore(reducer);

// const dispatchAddToDo = (context) => {
//     store.dispatch(addToDo(context));
//     console.log(store.getState());
// }

// const dispatchDeleteToDo = (e) => {
//     const id=parseInt(e.target.parentNode.id);
//     store.dispatch(deleteToDo(id));
// }

// const paintToDos = () => {
//     const toDos = store.getState();
//     ul.innerHTML = "";
//     toDos.forEach(element => {
//         const li = document.createElement("li");
//         const btn = document.createElement('button');
//         btn.innerText ='Del';
//         btn.addEventListener('click',dispatchDeleteToDo);
//         li.id = element.id;
//         li.innerText = element.text;
//         li.appendChild(btn);
//         ul.appendChild(li);
//     });
// }

// store.subscribe(paintToDos);

// const onSubmit = e => {
//     e.preventDefault();
//     const toDo = input.value;
//     input.value = "";
//     dispatchAddToDo(toDo);
// }

// form.addEventListener('submit',onSubmit);

import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <App />
  );
