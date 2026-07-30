function NoteList({ notes, deleteNote }) {
  return (
    <div className="rounded-3xl border border-white/10 bg-slate-900/70 p-5 shadow-xl shadow-black/20 backdrop-blur">
      <div className="mb-4 flex items-center justify-between">
        <h2 className="text-xl font-semibold">Notes</h2>
        <span className="text-sm text-slate-400">{notes.length} saved</span>
      </div>

      <div className="space-y-3">
        {notes.length === 0 ? (
          <p className="rounded-2xl border border-dashed border-slate-700 p-4 text-sm text-slate-400">
            No notes yet. Capture an idea anytime.
          </p>
        ) : (
          notes.map((note) => (
            <div key={note.id} className="rounded-2xl border border-slate-800 bg-slate-950/60 p-4">
              <div className="flex items-start justify-between gap-3">
                <div>
                  <h3 className="font-semibold text-slate-100">{note.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-300">{note.content}</p>
                </div>
                <button onClick={() => deleteNote(note.id)} className="text-sm text-rose-400 hover:text-rose-300">
                  Delete
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default NoteList;
