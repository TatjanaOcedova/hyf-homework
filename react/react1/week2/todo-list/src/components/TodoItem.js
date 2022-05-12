import React from "react";

export function TodoItem({ text, checked, id, deleteTodo, strikeTodo }) {
  return (
    <li className="lineThrough">
      <span className={checked ? "checked" : "unchecked"}>{text}</span>
      <input
        type="checkbox"
        value={checked}
        onChange={() => strikeTodo(id)}
      ></input>

      <button onClick={() => deleteTodo(id)}> Delete </button>
    </li>
  );
}
