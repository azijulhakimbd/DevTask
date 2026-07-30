function TaskForm({ taskInput, setTaskInput, addTask }) {
  return (
    <form onSubmit={addTask} className="rounded-3xl border border-white/10 bg-slate-900/70 p-5 shadow-xl shadow-black/20 backdrop-blur">
      <h2 className="text-xl font-semibold">Add a task</h2>
      <div className="mt-4 flex flex-col gap-3 sm:flex-row">
        <input
          value={taskInput}
          onChange={(e) => setTaskInput(e.target.value)}
          placeholder="What needs attention?"
          className="flex-1 rounded-2xl border border-slate-700 bg-slate-950/70 px-4 py-3 text-sm outline-none ring-0 placeholder:text-slate-400"
        />
        <button
          type="submit"
          className="rounded-2xl bg-cyan-500 px-4 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-400"
        >
          Add Task
        </button>
      </div>
    </form>
  );
}

export default TaskForm;
