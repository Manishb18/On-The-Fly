import React from 'react'
import Todo from './Todo'
const TodoList = ({todos, handleMarkedTodos, handleDelete}) => {
  return (
    <>
        {todos.map(todo=><Todo todo = {todo} handleDelete = {handleDelete}handleMarkedTodos = {handleMarkedTodos}/>)}
    </>
    
  )
}

export default TodoList
