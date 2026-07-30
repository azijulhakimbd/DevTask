import TodoCard from './TodoCard';

function TaskList({
  tasks,
  toggleTask,
  deleteTask,
  editTaskId,
  editValue,
  setEditValue,
  startEditing,
  saveEdit,
  cancelEdit,
  searchQuery,
  setSearchQuery,
  filterStatus,
  setFilterStatus,
}) {
  const filteredTasks = tasks.filter((task) => {
    const query = searchQuery.toLowerCase();
    const matchesQuery = task.title.toLowerCase().includes(query);
    const matchesStatus =
      filterStatus === 'all' || (filterStatus === 'active' && !task.completed) || (filterStatus === 'completed' && task.completed);

    return matchesQuery && matchesStatus;
  });

  return (
    <div className="rounded-3xl border border-white/10 bg-slate-900/70 p-5 shadow-xl shadow-black/20 backdrop-blur">
      <div className="mb-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h2 className="text-xl font-semibold">Todo Manager</h2>
          <p className="mt-1 text-sm text-slate-400">Manage your daily priorities with ease.</p>
        </div>
        <div className="flex flex-wrap gap-2 text-sm text-slate-300">
          <span className="rounded-full bg-slate-800 px-3 py-1">Total: {tasks.length}</span>
          <span className="rounded-full bg-emerald-500/10 px-3 py-1 text-emerald-300">
            Completed: {tasks.filter((task) => task.completed).length}
          </span>
          <span className="rounded-full bg-cyan-500/10 px-3 py-1 text-cyan-300">
            Remaining: {tasks.filter((task) => !task.completed).length}
          </span>
        </div>
      </div>

      <div className="mb-4 flex flex-col gap-3 sm:flex-row">
        <input
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search tasks"
          className="flex-1 rounded-2xl border border-slate-700 bg-slate-950/70 px-4 py-3 text-sm outline-none placeholder:text-slate-400"
        />
        <div className="flex flex-wrap gap-2">
          {['all', 'active', 'completed'].map((status) => (
            <button
              key={status}
              onClick={() => setFilterStatus(status)}
              className={`rounded-full px-3 py-2 text-sm ${
                filterStatus === status ? 'bg-cyan-500 text-slate-950' : 'bg-slate-800 text-slate-300'
              }`}
            >
              {status === 'all' ? 'All' : status === 'active' ? 'Active' : 'Completed'}
            </button>
          ))}
        </div>
      </div>

      <div className="space-y-3">
        {tasks.length === 0 ? (
          <p className="rounded-2xl border border-dashed border-slate-700 p-4 text-sm text-slate-400">
            No tasks yet. Add one to get started.
          </p>
        ) : filteredTasks.length === 0 ? (
          <p className="rounded-2xl border border-dashed border-slate-700 p-4 text-sm text-slate-400">
            No results found.
          </p>
        ) : (
          filteredTasks.map((task) => (
            <TodoCard
              key={task.id}
              task={task}
              onToggle={toggleTask}
              onDelete={deleteTask}
              onEdit={startEditing}
              isEditing={editTaskId === task.id}
              editValue={editValue}
              setEditValue={setEditValue}
              onSaveEdit={saveEdit}
              onCancelEdit={cancelEdit}
            />
          ))
        )}
      </div>
    </div>
  );
}

export default TaskList;
