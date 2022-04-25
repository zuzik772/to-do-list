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
    {
      id: 3,
      task: "study react",
      completed: false,
    },
    {
      id: 4,
      task: "go bouldering",
      completed: false,
    },
    {
      id: 5,
      task: "be friends with Agatka",
      completed: true,
    },
  ]);
  function deleteItem(id) {
    setTasks((oldState) => oldState.filter((item) => item.id !== id));
  }

  return (
    <div className="App">
      <form>
        <label htmlFor="name">Task</label>
        <input type="text" id="name" name="task" />
        <button>Add task</button>
      </form>
      <ul>
        {tasks.map((task) => (
          <ListItem deleteItem={deleteItem} {...task} />
        ))}
      </ul>
    </div>
  );
}

export default App;
