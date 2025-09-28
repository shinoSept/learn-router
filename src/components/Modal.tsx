import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import type { TaskCardProps } from "../libs/Todolist";
type props = {
  onAdd: (todo: TaskCardProps) => void;
};
export default function Modal({ onAdd }: props) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const titleOnChange = (event: any) => {
    setTitle(event.target.value);
  };
  const descriptionOnChange = (event: any) => {
    setDescription(event.target.value);
  };
  const submitSave = () => {
    if (title.trim()) {
      const newTodo = {
        id: uuidv4(),
        title,
        description,
        isDone: false,
      };
      onAdd(newTodo);
      setTitle("");
      setDescription("");
    }
  };
  return (
    <div className="modal fade" id="todoModal" tabIndex={-1} aria-hidden="true">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Add Todo List</h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">
            <input
              type="text"
              className="form-control mb-2"
              placeholder="Title Todo"
              value={title}
              onChange={titleOnChange}
            />
            <textarea
              className="form-control"
              placeholder="description..."
              value={description}
              onChange={descriptionOnChange}
            ></textarea>
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              data-bs-dismiss="modal"
              id="closeModal"
            >
              Cancel
            </button>
            <button
              type="button"
              className="btn btn-success"
              onClick={submitSave}
            >
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
