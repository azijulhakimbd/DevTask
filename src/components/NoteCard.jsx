function NoteCard({ note, onDelete, onEdit, isEditing, editTitle, setEditTitle, editContent, setEditContent, onSaveEdit, onCancelEdit }) {
  return (
    <div className="rounded-2xl border border-slate-800 bg-slate-950/60 p-4 shadow-lg shadow-black/20">
      {isEditing ? (
        <div className="space-y-3">
          <input
            value={editTitle}
            onChange={(e) => setEditTitle(e.target.value)}
            placeholder="Note title"
            className="w-full rounded-xl border border-slate-700 bg-slate-900 px-3 py-2 text-sm text-slate-100 outline-none"
          />
          <textarea
            value={editContent}
            onChange={(e) => setEditContent(e.target.value)}
            rows="4"
            placeholder="Write your note..."
            className="w-full rounded-xl border border-slate-700 bg-slate-900 px-3 py-2 text-sm text-slate-100 outline-none"
          />
          <div className="flex gap-2">
            <button onClick={() => onSaveEdit(note.id)} className="text-sm text-emerald-400 hover:text-emerald-300">
              Save
            </button>
            <button onClick={onCancelEdit} className="text-sm text-slate-400 hover:text-slate-300">
              Cancel
            </button>
          </div>
        </div>
      ) : (
        <>
          <div className="flex items-start justify-between gap-3">
            <div>
              <h3 className="font-semibold text-slate-100">{note.title}</h3>
              <p className="mt-2 text-sm leading-6 text-slate-300">{note.content}</p>
            </div>
            <button onClick={() => onDelete(note.id)} className="text-sm text-rose-400 hover:text-rose-300">
              Delete
            </button>
          </div>
          <div className="mt-4 flex items-center justify-between border-t border-slate-800 pt-3 text-xs text-slate-400">
            <span>{note.createdAt}</span>
            <button onClick={() => onEdit(note.id)} className="text-sm text-cyan-400 hover:text-cyan-300">
              Edit
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default NoteCard;
