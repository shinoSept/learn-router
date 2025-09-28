import TaskCard from "../components/TaskCard";
import TodoModal from "../components/Modal";
import { type TaskCardProps } from "../libs/Todolist";
import { useState } from "react";

function App() {
  const [tasks, setTasks] = useState<TaskCardProps[]>([
    {
      id: "1",
      title: "Read a book",
      description: "Vite + React + Bootstrap + TS",
      isDone: false,
    },
    {
      id: "2",
      title: "Write code",
      description: "Finish project for class",
      isDone: false,
    },
    {
      id: "3",
      title: "Deploy app",
      description: "Push project to GitHub Pages",
      isDone: true,
    },
  ]);
  const handleAdd = (newTask: TaskCardProps) => {
    const newTasks = [...tasks, newTask];
    setTasks(newTasks);
  };
  const toggleDone = (taskId: string) => {
    const newTask = tasks.map((todo: TaskCardProps) =>
      todo.id == taskId ? { ...todo, isDone: !todo.isDone } : todo
    );
    setTasks(newTask);
  };
  return (
    <div className="col-12 m-2 p-0">
      <div className="container text-center">
        <h2>Todo List</h2>
        <button
          type="button"
          className="btn btn-primary my-3"
          data-bs-toggle="modal"
          data-bs-target="#todoModal"
        >
          Add
        </button>
        {/* Modal Component */}
        <TodoModal onAdd={handleAdd} />
        {/* TaskCard Component */}
        {tasks.map((task) => (
          <TaskCard
            id={task.id}
            title={task.title}
            description={task.description}
            isDone={task.isDone}
            key={task.id}
            btDone={toggleDone}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
