import React, { useState } from "react";
import "./task.css";
import "./task";

const TaskList: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [inputValue, setInputValue] = useState<string>("");

  const handleAddTask = () => {
    if (inputValue.trim() !== "") {
      setTasks((prevTasks) => [
        ...prevTasks,
        {
          id: new Date().getTime(),
          content: inputValue.trim(),
          completed: false,
        },
      ]);
      setInputValue("");
    }
  };

  const handleRemoveTask = (taskId: number) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== taskId));
  };

  const handleToggleComplete = (taskId: number) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === taskId ? { ...task, completed: !task.completed } : task,
      ),
    );
  };

  return (
    <div className="container">
      <h2 className="text-center mb-4 text-light">Gestionnaire des Tâches</h2>

      <div className="row my-4">
        <div className="col-10">
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Ajouter une tâche..."
            className="form-control m-auto"
          />
        </div>
        <div className="col-2">
          <button onClick={handleAddTask} className="btn btn-light">
            <i className="far fa-plus"></i>
          </button>
        </div>
      </div>

      <header className="text-center text-light my-2">
        <form className="search">
          <input
            className="form-control m-auto"
            type="text"
            name="search"
            placeholder="recherche"
          />
        </form>
      </header>

      <ul className="list-group todos mx-auto text-light delete">
        {tasks.map((task) => (
          <li
            key={task.id}
            className="list-group-item d-flex justify-content-between align-items-center"
          >
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => handleToggleComplete(task.id)}
            />
            <span
              className="left"
              style={{
                textDecoration: task.completed ? "line-through" : "none",
              }}
            >
              {task.content}
            </span>
            <i
              onClick={() => handleRemoveTask(task.id)}
              className="far fa-trash-alt"
            ></i>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
