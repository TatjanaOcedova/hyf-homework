import React, { useState, useEffect } from "react";
import { TodoItem } from "./TodoItem";
// import todoData from "./todos";
import "../App.css";

export function TodoList() {
  const [todos, setTodos] = useState([]);
  const [description, setDescription] = useState("");
  const [deadline, setDeadline] = useState("");
  useEffect(() => {
    fetch(
      "https://gist.githubusercontent.com/benna100/391eee7a119b50bd2c5960ab51622532/raw"
    )
      .then((response) => response.json())
      .then((data) => setTodos(data));
  }, []);

  const addTodo = () => {
    setTodos((prevTodos) => {
      const newTodo = {
        id: prevTodos[prevTodos.length - 1].id + 1,
        description,
        deadline,
      };

      return [...prevTodos, newTodo];
    });
  };

  //not working
  const strikeTodo = (id) => {
    let strikeList = [...todos];
    strikeList.forEach((item) => {
      if (item.id === id) {
        item.checked = !item.checked;
      }
      return item;
    });
    setTodos(strikeList);
  };

  const TodoItems = todos.map((todo) => {
    return (
      <TodoItem
        description={todo.description}
        deadline={todo.deadline}
        id={todo.id}
        key={todo.id}
        deleteTodo={deleteTodo}
        editTodo={editTodo}
        strikeTodo={strikeTodo}
      />
    );
  });

  function deleteTodo(id) {
    return setTodos((prevTodos) => {
      let dataItems = prevTodos.filter((item) => item.id !== id);
      return dataItems;
    });
  }

  function editTodo(id, description) {
    console.log(id, description);
    const editedData = [...todos].map((edit) => {
      if (edit.id === id) {
        edit.description = description;
      }
      return edit;
    });
    setTodos(editedData);
  }

  return (
    <div>
      Todo description
      <input
        type="text"
        onChange={(e) => setDescription(e.target.value)}
      ></input>
      <br />
      Deadline
      <input type="date" onChange={(e) => setDeadline(e.target.value)}></input>
      <br />
      {TodoItems.length === 0 && <p>No Items</p>}
      <button onClick={addTodo}> Add todo </button>
      {TodoItems}
    </div>
  );
}
