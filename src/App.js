import React, { useState, useEffect } from "react";
import { v1 } from "uuid";
import Header from "./components/Header";
import HeaderMenu from "./components/HeaderMenu";
import ListItems from "./components/ListItems";

function App() {
  
  const [headerMenuShow, setHeaderMenuShow] = useState(false);
  const [task, setTask] = useState([]);
  const LOCAL_STORAGE_KEY = "task.list";

  // Get saved Task list from Local storage
  useEffect(() => {
    const storedTask = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if (storedTask) setTask(storedTask);
  }, [])

  // Save Todo list to Local storage
  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(task));
  }, [task])

  // Add new Todo
  function addNewTask(input) {
      setTask(previousTask => {
      return [...previousTask, { id: v1(), name: input, completed: false }]
    });
  }

  // Toggle checked Tasks
  function toggleTask(id) {
    const newTask = [...task];
    const checkTask = newTask.find(item => item.id === id);
    checkTask.completed = !checkTask.completed;
    setTask(newTask);
  }

  // Delete Task
  function deleteTask(id) {
    const newTask = [...task];
    const filteredTask = newTask.filter(item => item.id !== id);
    setTask(filteredTask);
  }

  //Clear completed Todos
  function clearCompleted() {
    const newTask = task.filter(item => !item.completed);
    setTask(newTask);
  }

  return (
    <main className="main">
      <Header
        headerMenuShow={headerMenuShow}
        setHeaderMenuShow={setHeaderMenuShow}
      />
      <HeaderMenu
        headerMenuShow={headerMenuShow}
        addNewTask={addNewTask}
        clearCompleted={clearCompleted}
        setTask={setTask}
      />
      <ListItems
        task={task}
        headerMenuShow={headerMenuShow}
        toggleTask={toggleTask}
        deleteTask={deleteTask}
      />
    </main>
  );
}

export default App;
