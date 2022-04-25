import "./App.css";
import { useState } from "react";
import ListItem from "./components/ListItem";

function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      task: "walk the dog",
      completed: false,
    },
    {
      id: 2,
      task: "clean the house",
      completed: true,
    },
  ]);
  return (
    <div className="App">
      <form>
        <label htmlFor="name">Task</label>
        <input type="text" id="name" name="task" />
        <button>Add task</button>
      </form>
      <ul>
        <ListItem />
      </ul>
    </div>
  );
}

export default App;
