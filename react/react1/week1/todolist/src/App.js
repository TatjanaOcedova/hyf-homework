import "./App.css";
import tasks from "./TodoTask";
import TodoTaskList from "./TodoTaskList";
import TodoTitle from "./TodoTitle";

function App() {
  return (
    <div className="App">
      <TodoTitle title="Todo List" />
      <ul>
        {tasks.map((task) => {
          return (
            <TodoTaskList
              description={task.description}
              deadline={task.deadline}
            />
          );
        })}
      </ul>
    </div>
  );
}

export default App;
