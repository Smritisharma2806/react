
function Listitem({ itemlist, completed, onDelete, onToggle }) {
  return (
    <div className="task-item d-flex justify-content-between align-items-center">

      <h3 className={`task-text ${completed ? "completed" : ""}`}>
        {itemlist}
      </h3>

      <div className="task-buttons">
        <button
          type="button"
          className="btn btn-done me-2"
          onClick={onToggle}
        >
          {completed ? "Undo" : "Done"} ✓
        </button>

        <button
          type="button"
          className="btn btn-delete"
          onClick={onDelete}
        >
          Delete ✕
        </button>
      </div>

    </div>
  );
}

export default Listitem;
