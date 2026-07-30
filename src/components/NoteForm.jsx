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
      className="card-hover p-5 sm:p-6 animate-slideUp"
    >
      <h2 className="text-xl font-semibold mb-4">Create a note</h2>
      <div className="space-y-3">
        <input
          value={noteTitle}
          onChange={(e) => {
            setNoteTitle(e.target.value);
            if (error) setError('');
          }}
          placeholder="Note title"
          className="input-base"
        />
        <textarea
          value={noteContent}
          onChange={(e) => {
            setNoteContent(e.target.value);
            if (error) setError('');
          }}
          rows="4"
          placeholder="Write your thoughts..."
          className="input-base resize-none"
        />
        <button
          type="submit"
          disabled={isInvalid}
          className="btn-primary !bg-violet-500 hover:!bg-violet-400"
        >
          Save Note
        </button>
      </div>
      {error ? <p className="mt-2 text-sm text-rose-400 animate-slideUp">{error}</p> : null}
    </form>
  );
}

export default NoteForm;
