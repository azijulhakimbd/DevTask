function NoteForm({ noteTitle, setNoteTitle, noteContent, setNoteContent, addNote }) {
  return (
    <form onSubmit={addNote} className="rounded-3xl border border-white/10 bg-slate-900/70 p-5 shadow-xl shadow-black/20 backdrop-blur">
      <h2 className="text-xl font-semibold">Create a note</h2>
      <div className="mt-4 space-y-3">
        <input
          value={noteTitle}
          onChange={(e) => setNoteTitle(e.target.value)}
          placeholder="Note title"
          className="w-full rounded-2xl border border-slate-700 bg-slate-950/70 px-4 py-3 text-sm outline-none placeholder:text-slate-400"
        />
        <textarea
          value={noteContent}
          onChange={(e) => setNoteContent(e.target.value)}
          rows="4"
          placeholder="Write your thoughts..."
          className="w-full rounded-2xl border border-slate-700 bg-slate-950/70 px-4 py-3 text-sm outline-none placeholder:text-slate-400"
        />
        <button type="submit" className="rounded-2xl bg-violet-500 px-4 py-3 text-sm font-semibold text-white transition hover:bg-violet-400">
          Save Note
        </button>
      </div>
    </form>
  );
}

export default NoteForm;
