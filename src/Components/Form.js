
// 4th

import React, { useState } from 'react'
import {v4 as uuid} from 'uuid';
import styles from './Form.module.css'
const Form = (props) => {

    let [input, setInput] = useState('');
    console.log(input);
    function inputChangeHandler(e){
        setInput(e.target.value)
        
    }

    function formSubmitHandler(e){
        e.preventDefault();   //preventing from getting submitted or avoid reloading
        const newTodo = {
            id : uuid(),
            todo : input,
            checked : false
        }
        props.addTodo(newTodo);
        
        console.log(input);
        setInput('');
    }

    return (
    <form className={styles.form} onSubmit={formSubmitHandler}>
        <label htmlFor="">What To Do</label>
        <input onChange={inputChangeHandler} type='text' placeholder='enter your Task' value={input}/>
    </form>
  )
}

export default Form