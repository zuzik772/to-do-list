import "./App.css";
import { useState } from "react";
import ListItem from "./components/ListItem";
import Fetcher from "./components/Fetcher";

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
  const [showCompleted, setShowCompleted] = useState(true);
  function deleteItem(id) {
    setTasks((oldState) => oldState.filter((item) => item.id !== id));
  }
  function toggleCompletion(id) {
    setTasks((oldState) => {
      return oldState.map((item) => {
        if (id === item.id) {
          const newItem = { ...item };
          newItem.completed = !newItem.completed;
          return newItem;
        }
        return item;
      });
    });
  }
  let all = tasks;
  if (!showCompleted) {
    all = tasks.filter((item) => item.completed === false);
  }

  function submit(e) {
    e.preventDefault();
    // console.log(e); //form
    // console.log(e.target.elements.name.value);
    const newTask = {
      id: Math.random(),
      task: e.target.elements.name.value,
      completed: false,
    };
    setTasks((oldState) => oldState.concat(newTask));
  }
  return (
    <div className="App">
      <Fetcher />
      <button
        onClick={() => {
          setShowCompleted((oldState) => !oldState);
        }}
      >
        Show
      </button>
      <form onSubmit={submit}>
        <label htmlFor="name">Task</label>
        <input required type="text" id="name" name="task" />
        <button>Add task</button>
      </form>
      <ul>
        {all.map((task) => (
          <ListItem toggleCompletion={toggleCompletion} deleteItem={deleteItem} {...task} />
        ))}
      </ul>
    </div>
  );
}

export default App;
