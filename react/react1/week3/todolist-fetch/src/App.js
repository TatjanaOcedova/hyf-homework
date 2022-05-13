import "./App.css";
import Timer from "./components/Timer";

import { TodoList } from "./components/TodoList";
import TodoTitle from "./components/TodoTitle";

function App() {
  return (
    <div className="App">
      <TodoTitle />
      <Timer />
      <TodoList />
    </div>
  );
}

export default App;
