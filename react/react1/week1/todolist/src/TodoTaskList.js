function TodoTaskList(props) {
  return (
    <div>
      <span>{props.description}</span>, <span>{props.deadline}</span>
    </div>
  );
}

export default TodoTaskList;
