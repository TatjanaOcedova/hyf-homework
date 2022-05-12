import React, { useState } from "react";
import { TodoItem } from "./TodoItem";
import todoData from "./todos";
import "../App.css";

export function TodoList() {
  const [todos, setTodos] = useState(todoData);

  const addRandomTodo = () => {
    setTodos((prevTodos) => {
      const newTodo = {
        id: prevTodos[prevTodos.length - 1].id + 1,
        description: "random things",
        done: false,
      };

      return [...prevTodos, newTodo];
    });
  };

  const strikeTodo = (id) => {
    var strikeList = [...todos];
    strikeList.forEach((item) => {
      if (item.id === id) {
        item.checked = !item.checked;
      }
    });
    setTodos(strikeList);
  };
  const TodoItems = todos.map((todo) => (
    <TodoItem
      text={todo.description}
      checked={todo.checked}
      id={todo.id}
      key={todo.id}
      strikeTodo={strikeTodo}
      deleteTodo={deleteTodo}
    />
  ));

  function deleteTodo(id) {
    return setTodos((prevTodos) => {
      let dataItems = prevTodos.filter((item) => item.id !== id);
      return dataItems;
    });
  }

  return (
    <div>
      <button onClick={addRandomTodo}> Add todo </button>

      {TodoItems.length === 0 && "No Items"}
      {TodoItems}
    </div>
  );
}
