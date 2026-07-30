function TaskForm({ taskInput, setTaskInput, addTask, error, setError }) {
  const isInvalid = taskInput.trim().length < 3;

  return (
    <form
      onSubmit={(e) => {
        if (isInvalid) {
          e.preventDefault();
          setError('Task must be at least 3 characters.');
          return;
        }
        setError('');
        addTask(e);
      }}
      className="card-hover p-5 sm:p-6 animate-slideUp"
    >
      <h2 className="text-xl font-semibold mb-4">Add a task</h2>
      <div className="mt-4 flex flex-col gap-3 sm:flex-row">
        <input
          value={taskInput}
          onChange={(e) => {
            setTaskInput(e.target.value);
            if (error) setError('');
          }}
          placeholder="What needs attention?"
          className="input-base flex-1"
        />
        <button
          type="submit"
          disabled={isInvalid}
          className="btn-primary"
        >
          Add Task
        </button>
      </div>
      {error ? <p className="mt-2 text-sm text-rose-400 animate-slideUp">{error}</p> : null}
    </form>
  );
}

export default TaskForm;
