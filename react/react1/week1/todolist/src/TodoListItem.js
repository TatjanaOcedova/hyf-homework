function TodoListItem(props) {
  return (
    <div>
      <li>
        <span>{props.description}</span>, <span>{props.deadline}</span>
      </li>
    </div>
  );
}

export default TodoListItem;
