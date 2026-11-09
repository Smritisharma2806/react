import { useState } from "react";

function Form({ setTaskList }) {
  const [task, setTask] = useState("");

  function submitHandler(e) {
    e.preventDefault();

    if (task.trim() === "") return;

    setTaskList((prev) => [...prev, 
      {
        text : task,
        completed : false
      }]);
    setTask("");

  }

  return (
    <form onSubmit={submitHandler} className="d-flex gap-2 mb-4">
      <input
        type="text"
        className="form-control"
        placeholder="Add a new task"
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />

      <button className="btn btn-add" type="submit">
        Add
      </button>
    </form>
  );
}

export default Form;


