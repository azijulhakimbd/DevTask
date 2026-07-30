function TodoCard({ task, onToggle, onDelete, onEdit, isEditing, editValue, setEditValue, onSaveEdit, onCancelEdit }) {
  return (
    <div className="card-hover p-4 group animate-fadeIn">
      <label className="flex flex-1 cursor-pointer items-start gap-3">
        <input
          type="checkbox"
          checked={task.completed}
          onChange={() => onToggle(task.id)}
          className="mt-1 h-4 w-4 rounded border-slate-600 bg-slate-900 cursor-pointer transition-all duration-250 accent-cyan-500 hover:border-cyan-400"
        />

        <div className="min-w-0 flex-1">
          {isEditing ? (
            <input
              value={editValue}
              onChange={(e) => setEditValue(e.target.value)}
              className="input-base text-sm"
              autoFocus
            />
          ) : (
            <span className={task.completed ? 'block text-sm text-slate-500 line-through' : 'block text-sm text-slate-100 group-hover:text-slate-50 transition-colors duration-250'}>
              {task.title}
            </span>
          )}
        </div>
      </label>

      <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-250">
        {isEditing ? (
          <>
            <button onClick={() => onSaveEdit(task.id)} className="btn-sm text-emerald-400 hover:text-emerald-300 hover:bg-emerald-400/10">
              Save
            </button>
            <button onClick={onCancelEdit} className="btn-sm text-slate-400 hover:text-slate-300 hover:bg-slate-700">
              Cancel
            </button>
          </>
        ) : (
          <>
            <button onClick={() => onEdit(task.id)} className="btn-sm text-cyan-400 hover:text-cyan-300 hover:bg-cyan-400/10">
              Edit
            </button>
            <button onClick={() => onDelete(task.id)} className="btn-sm text-rose-400 hover:text-rose-300 hover:bg-rose-400/10">
              Delete
            </button>
          </>
        )}
      </div>
    </div>
  );
}

export default TodoCard;
