import React, { useState } from "react";

function Home(){
    const [text, setText] = useState("");
    const onChange = (e) => {
        setText(e.target.value);
    }
    const onSubmit = (e) => {
        e.preventDefault();
        console.log('dddd');
    }
    return(
        <>
            <h1>To Do</h1>
            <form onSubmit={onSubmit}>
                <input type="text" onChange={onChange}></input>
                <button>Add</button>
            </form>
            <ul></ul>
        </>
    )
}

export default Home;