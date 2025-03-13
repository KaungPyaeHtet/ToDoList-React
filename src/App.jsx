import React, { useState } from "react";
import ToDoList from "./ToDoList";

const App = () => {
  const [todos, setTodo] = useState([{ id: 1, text: "hi", completed: false }]);
  const toggleTodo = (id) => {
    setTodo(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };
  const addTodo = (text) => {
    setTodo([...todos, { id: Date.now(), text: text, completed: false }]);
    console.log(todos);
  };
  const removeTodo = (id) => {
	setTodo(todos.filter(todo => {
		return todo.id !== id
	  }));
	  console.log(todos)
  };
  return (
    <div>
      <h1> To do List </h1>
      <input id="text" type="text" />
      <button
        onClick={() => {
          if (document.getElementById("text").value != "") {
            addTodo(document.getElementById("text").value);
          } else {
            window.alert("Please enter a value");
          }
          document.getElementById("text").value = "";
        }}
      >
        Add to do
      </button>
      <ToDoList todos={todos} toggleTodo={toggleTodo} deleteTodo={removeTodo} />
    </div>
  );
};

export default App;
