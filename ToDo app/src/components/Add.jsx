import { useState } from "react";
import "../App.css";
import List from "./List";
import Form from "./Form";
import Footer from "./Footer";

function Add() {
  const [taskList, setTaskList] = useState([]);

  
function deleteTask(selectedTask) {
  setTaskList((prev) =>
    prev.filter((item) => item !== selectedTask) 
  );
}

function toggleDone(selectedTask) {
  setTaskList((prev) =>
    prev.map((item) =>
      item === selectedTask
        ? { ...item, completed: !item.completed }
        : item
    )
  );
}

  const completedTasks = taskList.filter((item) => item.completed).length;
  const totalTasks = taskList.length;

  const sortedTaskList = taskList.slice().sort((a, b) => {
    return Number(a.completed) - Number(b.completed);
  });

  return (
     <div className="todo-page">
  <div className="todo-card">
    <h2 className="todo-title">My Little To-Do List 🌷</h2>
    <p className="todo-subtitle">Small steps, big achievements!</p>

    <Form setTaskList={setTaskList} />

    <List
      sortedTaskList={sortedTaskList}
      deleteTask={deleteTask}
      toggleDone={toggleDone}
    />

    <Footer
      completedTasks={completedTasks}
      totalTasks={totalTasks}
    />
  </div>
</div>
  )
}
export default Add;


