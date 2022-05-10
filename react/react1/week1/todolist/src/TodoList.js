import tasks from "./todos";
import TodoListItem from "./TodoListItem";
function TodoList() {
  return (
    <div>
      <ul>
        {tasks.map((task) => {
          return (
            <TodoListItem
              description={task.description}
              deadline={task.deadline}
            />
          );
        })}
      </ul>
    </div>
  );
}

export default TodoList;
