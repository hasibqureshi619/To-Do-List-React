
// 3rd

import React from 'react'
import {BsTrashFill} from 'react-icons/bs';
import styles from './Form.module.css'
const Todo = ({deleteTodo, checkTodo, todoItem}) => {

  function deleteTodoHandler(id){
    deleteTodo(id);
  }

  const inputChangeHandler =(id)=>{
    checkTodo(id)
  }

  return (
  
    <div className={styles.div}>
        <li className={styles.li} style={{textDecoration : `${todoItem.checked ? 'line-through' : ''}`}}>
          <input type="checkbox" onChange={()=> {inputChangeHandler(todoItem.id)}} defaultChecked = {todoItem.checked} />
          {/* <span>ID: {todoItem.id} -- <br />Task : {todoItem.todo}</span>  */}
          <span className={styles.task}>Task : {todoItem.todo}</span> 
          <span className={styles.trash} onClick={()=>deleteTodoHandler(todoItem.id)}><BsTrashFill/> </span><br /><br /><br />
        </li>
    </div>
  )
}

export default Todo