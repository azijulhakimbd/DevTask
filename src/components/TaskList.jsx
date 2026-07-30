function TaskList({ tasks, toggleTask, deleteTask }) {
  return (
    <div className="rounded-3xl border border-white/10 bg-slate-900/70 p-5 shadow-xl shadow-black/20 backdrop-blur">
      <div className="mb-4 flex items-center justify-between">
        <h2 className="text-xl font-semibold">Tasks</h2>
        <span className="text-sm text-slate-400">{tasks.length} items</span>
      </div>

      <div className="space-y-3">
        {tasks.length === 0 ? (
          <p className="rounded-2xl border border-dashed border-slate-700 p-4 text-sm text-slate-400">
            No tasks yet. Add one to get started.
          </p>
        ) : (
          tasks.map((task) => (
            <div key={task.id} className="flex items-center justify-between rounded-2xl border border-slate-800 bg-slate-950/60 p-3">
              <label className="flex flex-1 cursor-pointer items-center gap-3">
                <input
                  type="checkbox"
                  checked={task.completed}
                  onChange={() => toggleTask(task.id)}
                  className="h-4 w-4 rounded border-slate-600 bg-slate-900"
                />
                <span className={task.completed ? 'text-slate-500 line-through' : 'text-slate-100'}>{task.title}</span>
              </label>
              <button onClick={() => deleteTask(task.id)} className="ml-3 text-sm text-rose-400 hover:text-rose-300">
                Remove
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default TaskList;
