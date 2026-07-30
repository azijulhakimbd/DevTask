function TodoCard({ task, onToggle, onDelete, onEdit, isEditing, editValue, setEditValue, onSaveEdit, onCancelEdit }) {
  return (
    <div className="flex items-start justify-between gap-3 rounded-2xl border border-slate-800 bg-slate-950/60 p-4">
      <label className="flex flex-1 cursor-pointer items-start gap-3">
        <input
          type="checkbox"
          checked={task.completed}
          onChange={() => onToggle(task.id)}
          className="mt-1 h-4 w-4 rounded border-slate-600 bg-slate-900"
        />

        <div className="min-w-0 flex-1">
          {isEditing ? (
            <input
              value={editValue}
              onChange={(e) => setEditValue(e.target.value)}
              className="w-full rounded-xl border border-slate-700 bg-slate-900 px-3 py-2 text-sm text-slate-100 outline-none"
            />
          ) : (
            <span className={task.completed ? 'block text-sm text-slate-500 line-through' : 'block text-sm text-slate-100'}>
              {task.title}
            </span>
          )}
        </div>
      </label>

      <div className="flex items-center gap-2">
        {isEditing ? (
          <>
            <button onClick={() => onSaveEdit(task.id)} className="text-sm text-emerald-400 hover:text-emerald-300">
              Save
            </button>
            <button onClick={onCancelEdit} className="text-sm text-slate-400 hover:text-slate-300">
              Cancel
            </button>
          </>
        ) : (
          <>
            <button onClick={() => onEdit(task.id)} className="text-sm text-cyan-400 hover:text-cyan-300">
              Edit
            </button>
            <button onClick={() => onDelete(task.id)} className="text-sm text-rose-400 hover:text-rose-300">
              Delete
            </button>
          </>
        )}
      </div>
    </div>
  );
}

export default TodoCard;
