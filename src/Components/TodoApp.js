
// 1st

import React, { useEffect, useState } from 'react'
import TodoList from './TodoList'
import Form from './Form'
import {v4 as uuid} from 'uuid';
const TodoApp = () => {
    
    // let arrayDummy = [
    //     {
    //         id : uuid(),
    //         todo : 'maze karo',
    //         checked : false
    //     },
    //     {
    //         id : uuid(),
    //         todo :'Code karo',
    //         checked : false
    //     },
    //     {
    //         id : uuid(),
    //         todo : 'kuchh mat karo',
    //         checked : false
    //     }
    // ]
// trying to getItems from localStorage                        keyname
    let arrayDummy = JSON.parse(window.localStorage.getItem("todos") || "[]" ) 

    // now we want to append our form value into the list
    let [todos,setTodos] = useState(arrayDummy);
     //   ^--arraydummy(that is initial value)
    
     // newTodo is refer as todo from our form.
     const addTodo = (todo)=>{
        setTodos([...todos,todo])
    }
// will use useEffect to  render arraydata(todos(arrayDummy)) on the localStorage
    useEffect(()=>{
                        // key(anything)   ,   value
        localStorage.setItem("todo", JSON.stringify(todos));
        
        console.log("useEffect will run whenever any change occures in to the todos array")
    }, [todos])

    // const deleteTodo = (id) =>{
    // changes storing in a new array(newTodo)
    //     const newTodo = todos.filter((todo)=>todo.id !== id);
    //     setTodos(newTodo);
    // }
            // OR delete using previous State 

    const deleteTodo = (id) =>{
        // changes occurring/storing into the prevState(previous condition of the array)  
        setTodos((prevState)=>{
            return prevState.filter((todo)=>todo.id !== id);

        })
        
    }

    const checkTodo = (id)=>{
        setTodos((prevState)=>{
            return prevState.map((item)=> item.id === id ? {...item , checked : !item.checked} : item)
        })
    }

  return (
    <div>
        <h2 style={{textAlign:'center'}}>Note Down Your Tasks and Hit The Goal</h2>
        <Form addTodo = {addTodo} todos={todos}/>
        <TodoList todos={todos} deleteTodo = {deleteTodo} checkTodo = {checkTodo}/>
    </div>
  )


}

export default TodoApp