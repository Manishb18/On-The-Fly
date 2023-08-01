import React, { useState, useEffect, useRef } from "react";
import "./Todo.css";
import TodoList from "./TodoList";
import { v4 as uuidv4 } from "uuid";

const LOCAL_STORAGE_KEY = "TodoKey";
const Todos = () => {
  const [todos, setTodos] = useState(() => {
    const storedTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    return storedTodos || [];
  });

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos));
  }, [todos]);

  const todoTitle = useRef();
  const todoDesc = useRef();
  function addTodo(e) {
    e.preventDefault();
    const todo_title = todoTitle.current.value;
    const todo_desc = todoDesc.current.value;
    if (todo_title === "" || todo_desc === "") {
      alert("Title or Desc Cannot be empty");
      todoTitle.cuurent.value = "";
      todoDesc.current.value = "";
      return;
    }
    setTodos((prevTodos) => {
      return [
        ...prevTodos,
        {
          id: uuidv4(),
          title: todo_title,
          desc: todo_desc,
          complete_status: false,
        },
      ];
    });
    todoTitle.current.value = "";
    todoDesc.current.value = "";
  }
  function handleMarkedTodos(id) {
    const newTodos = todos;

    const todo = newTodos.find((todo) => todo.id == id);
    if (todo.complete_status) {
      alert("Already marked as completed!!");
      return;
    }
    todo.complete_status = true;
    setTodos(newTodos);
    alert("Marked Successfully!");
  }

  function deleteTodo(id) {
    const newTodos = todos.filter((todo) => todo.id != id);
    setTodos(newTodos);
  }

  function clearCompleted() {
    if(todos.length == 0)alert("No todos added")
    const newTodos1 = todos.filter((todo) => todo.complete_status == false);
    setTodos(newTodos1);
  }
  return (
    <div className="todo-hero-container">
        <div className="todo-heading">
          <h1>Add Todos</h1>
        </div>
      <div className="subContainer">
        <form className="todoForm" onSubmit={addTodo}>
          <label htmlFor="titleInput"> Add Title</label>
          <input ref={todoTitle} id="titleInput" type="text" />
          <label htmlFor="descInput">Add Description</label>
          <input ref={todoDesc} id="descInput" type="text" />
          <div className="buttons">
            <button className="btn btn-submit" type="submit">
              Add Todo
            </button>
            <button
              className="btn btn-clear"
              onClick={clearCompleted}
              type="button"
            >
              Clear Completed
            </button>
          </div>
        </form>

        <div className="todos">
          <h2>Todos to do</h2>
          <div className="todoCount">You have {todos.length} todos to do</div>
          <TodoList
            todos={todos}
            handleDelete={deleteTodo}
            handleMarkedTodos={handleMarkedTodos}
          />
        </div>
      </div>
    </div>
  );
};

export default Todos;
