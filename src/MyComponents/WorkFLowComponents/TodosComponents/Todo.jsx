import React from 'react'

const Todo = ({todo, handleMarkedTodos, handleDelete}) => {
  return (
    <div>
      <h2>{todo.title}</h2>
      <p>{todo.desc}</p>
      <button onClick={()=>handleMarkedTodos(todo.id)}>Mark as Completed</button>
      <button onClick = {()=>handleDelete(todo.id)}>Delete Todo</button>
    </div>
  )
}
export default Todo
