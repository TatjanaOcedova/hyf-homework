import React, { useState } from "react";
import "../App.css";
import FancyBorder from "./FancyBorder";

export function TodoItem({ description, deadline, id, deleteTodo, editTodo }) {
  const [checked, setChecked] = useState("unchecked");
  const [editTodoItem, setEditTodoItem] = useState(false);
  const [updateTodoItem, setUpdateTodo] = useState("");

  const strikeThrough = () => {
    setChecked((box) => {
      if (box === "unchecked") {
        return "checked";
      } else {
        return "unchecked";
      }
    });
  };

  const toCallDelete = () => {
    deleteTodo(id);
  };
  const toCallEdit = () => {
    setEditTodoItem(true);
    setUpdateTodo(description);
  };
  function updateDesc(e) {
    const value = e.target.value;
    setUpdateTodo(value);
  }
  function infoUpdation() {
    setEditTodoItem(false);
    editTodo(id, updateTodoItem);
  }

  return (
    <div className="border-design">
      <FancyBorder>
        <label htmlFor="strike" className={checked}>
          {editTodoItem ? (
            <input type="text" value={updateTodoItem} onChange={updateDesc} />
          ) : (
            description
          )}
          {" | "}
          {deadline}
        </label>

        <input id="strike" type="checkbox" onChange={strikeThrough} />
        <button onClick={toCallDelete}> Delete </button>
        {editTodoItem ? (
          <button onClick={infoUpdation}> Update </button>
        ) : (
          <button onClick={toCallEdit}> Edit </button>
        )}
      </FancyBorder>
    </div>
  );
}
