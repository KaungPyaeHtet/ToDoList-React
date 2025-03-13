import React from "react";

const ToDoItem = ({ todo, toggleTodo, deleteTodo }) => {
  return (
    <li>
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => toggleTodo(todo.id)}
      />
      <button onClick={() => deleteTodo(todo.id)}>Delete</button>
      {todo.completed ? <s> {todo.text} </s> : todo.text}
    </li>
  );
};

export default ToDoItem;
