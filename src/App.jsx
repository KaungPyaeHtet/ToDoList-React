import React, { useState } from "react";
import ToDoList from "./ToDoList";

const App = () => {
  const [todos, setTodo] = useState([
    {
      id: 1,
      text: "Learn react js",
      completed: false,
    },
    {
      id: 2,
      text: "Learn html again",
      completed: false,
    },
  ]);
  const toggleTodo = (id) => {
    setTodo(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  return (
    <div>
		<h1> To do List </h1>
		<ToDoList todos={todos} toggleTodo={toggleTodo} />
    </div>
  );
};

export default App;
