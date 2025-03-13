import React from 'react'
import ToDoItem from "./ToDoItem"

const ToDoList = ({todos, toggleTodo}) => {
  return (
    <ul style={{
        listStyleType: 'none',
        display: "flex",
        flexDirection: "column",
    }}>
        {todos.map(todo => (
            <ToDoItem key={todo.id} todo={todo} toggleTodo={toggleTodo}/>
        ))}
    </ul>
  )
}

export default ToDoList