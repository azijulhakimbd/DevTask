function NoteForm({ noteTitle, setNoteTitle, noteContent, setNoteContent, addNote, error, setError }) {
  const isInvalid = noteTitle.trim().length < 3 || noteContent.trim().length < 3;

  return (
    <form
      onSubmit={(e) => {
        if (isInvalid) {
          e.preventDefault();
          setError('Both title and content must be at least 3 characters.');
          return;
        }
        setError('');
        addNote(e);
      }}
      className="rounded-3xl border border-white/10 bg-slate-900/70 p-5 shadow-xl shadow-black/20 backdrop-blur"
    >
      <h2 className="text-xl font-semibold">Create a note</h2>
      <div className="mt-4 space-y-3">
        <input
          value={noteTitle}
          onChange={(e) => {
            setNoteTitle(e.target.value);
            if (error) setError('');
          }}
          placeholder="Note title"
          className="w-full rounded-2xl border border-slate-700 bg-slate-950/70 px-4 py-3 text-sm outline-none placeholder:text-slate-400"
        />
        <textarea
          value={noteContent}
          onChange={(e) => {
            setNoteContent(e.target.value);
            if (error) setError('');
          }}
          rows="4"
          placeholder="Write your thoughts..."
          className="w-full rounded-2xl border border-slate-700 bg-slate-950/70 px-4 py-3 text-sm outline-none placeholder:text-slate-400"
        />
        <button
          type="submit"
          disabled={isInvalid}
          className="rounded-2xl bg-violet-500 px-4 py-3 text-sm font-semibold text-white transition hover:bg-violet-400 disabled:cursor-not-allowed disabled:bg-slate-700 disabled:text-slate-400"
        >
          Save Note
        </button>
      </div>
      {error ? <p className="mt-2 text-sm text-rose-400">{error}</p> : null}
    </form>
  );
}

export default NoteForm;
