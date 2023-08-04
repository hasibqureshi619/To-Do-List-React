
// 2nd

import React from 'react'
import Todo from './Todo'

const TodoList = ({todos,deleteTodo, checkTodo }) => {
    const allTodos = todos.map((item,index)=>{
        return <Todo key={index} id = {item.id} todoItem = {item} deleteTodo = {deleteTodo} checkTodo = {checkTodo}/>
    })
  return (
    <section>
        <ul>
            {allTodos}
        </ul>
    </section>
  )
}

export default TodoList