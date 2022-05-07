import React, { useState } from "react";
import { TodoItem } from "./TodoItem";
import todos from "./todos";
import "../App.css";

export function TodoList() {
  const [useTodo, setUseTodo] = useState(todos);

  const addRandomTodo = () => {
    const myNextTodoItem = "random things";
    const newTodo = {
      id: useTodo.length + 1,
      description: myNextTodoItem,
      done: false,
    };
    setUseTodo((prevTodos) => {
      return [...prevTodos, newTodo];
    });
  };

  const strikeTodo = (id) => {
    var strikeList = [...useTodo];
    strikeList.forEach((item) => {
      if (item.id === id) {
        item.checked = !item.checked;
      }
    });
    setUseTodo(strikeList);
  };
  const TodoItems = useTodo.map((todo) => (
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
    return setUseTodo((prevTodos) => {
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
