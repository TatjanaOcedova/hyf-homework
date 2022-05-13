import React, { useState } from "react";

export function TodoItem({
  description,
  deadline,
  checked,
  id,
  deleteTodo,
  strikeTodo,
  editTodo,
}) {
  const [editstate, setEditstate] = useState(false);
  const [updatestate, setUpdatestate] = useState("");

  const toCallDelete = () => {
    deleteTodo(id);
  };
  const toCallEdit = () => {
    setEditstate(true);
    setUpdatestate(description);
  };
  function updateDesc(e) {
    const value = e.target.value;
    setUpdatestate(value);
  }
  function infoUpdation() {
    setEditstate(false);
    editTodo(id, updatestate);
  }

  return (
    <li className="lineThrough">
      {editstate ? (
        <input type="text" value={updatestate} onChange={updateDesc} />
      ) : (
        <span className={checked ? "checked" : "unchecked"}>
          {description} {deadline}
        </span>
      )}

      <input type="checkbox" value={checked} onChange={() => strikeTodo(id)} />
      <button onClick={toCallDelete}> Delete </button>
      {editstate ? (
        <button onClick={infoUpdation}> Update </button>
      ) : (
        <button onClick={toCallEdit}> Edit </button>
      )}
    </li>
  );
}
