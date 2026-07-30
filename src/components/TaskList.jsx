import TodoCard from './TodoCard';
import { EmptyTasks, EmptySearchResults } from './EmptyState';

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
    <div className="card-hover p-5 sm:p-6 animate-slideUp">
      <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h2 className="text-xl font-semibold">Todo Manager</h2>
          <p className="mt-1 text-sm text-slate-400">Manage your daily priorities with ease.</p>
        </div>
        <div className="flex flex-wrap gap-2 text-sm text-slate-300">
          <span className="rounded-full bg-slate-800 px-3 py-1">Total: {tasks.length}</span>
          <span className="rounded-full bg-emerald-500/10 px-3 py-1 text-emerald-300">
            Done: {tasks.filter((task) => task.completed).length}
          </span>
          <span className="rounded-full bg-cyan-500/10 px-3 py-1 text-cyan-300">
            Active: {tasks.filter((task) => !task.completed).length}
          </span>
        </div>
      </div>

      <div className="mb-4 flex flex-col gap-3 sm:flex-row">
        <input
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search tasks"
          className="input-base flex-1"
        />
        <div className="flex flex-wrap gap-2">
          {['all', 'active', 'completed'].map((status) => (
            <button
              key={status}
              onClick={() => setFilterStatus(status)}
              className={`btn-sm rounded-full px-4 py-2 ${
                filterStatus === status ? 'bg-cyan-500 text-slate-950 font-semibold' : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
              }`}
            >
              {status === 'all' ? 'All' : status === 'active' ? 'Active' : 'Completed'}
            </button>
          ))}
        </div>
      </div>

      <div className="space-y-3">
        {tasks.length === 0 ? (
          <EmptyTasks />
        ) : filteredTasks.length === 0 ? (
          <EmptySearchResults />
        ) : (
          filteredTasks.map((task, idx) => (
            <div key={task.id} style={{ animation: `slideUp 0.4s ease-out ${idx * 50}ms backwards` }}>
              <TodoCard
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
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default TaskList;
