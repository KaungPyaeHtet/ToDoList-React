import React from "react";

const ToDoItem = ({ todo, toggleTodo }) => {
  return (
    <li>
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => toggleTodo(todo.id)}
      />
      {todo.completed ? <s> {todo.text} </s> : todo.text}
    </li>
  );
};

export default ToDoItem;
