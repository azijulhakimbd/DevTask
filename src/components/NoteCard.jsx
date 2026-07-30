function NoteCard({ note, onDelete, onEdit, isEditing, editTitle, setEditTitle, editContent, setEditContent, onSaveEdit, onCancelEdit }) {
  return (
    <div className="card-hover p-4 h-full flex flex-col animate-fadeIn group">
      {isEditing ? (
        <div className="space-y-3 flex-1">
          <input
            value={editTitle}
            onChange={(e) => setEditTitle(e.target.value)}
            placeholder="Note title"
            className="input-base"
            autoFocus
          />
          <textarea
            value={editContent}
            onChange={(e) => setEditContent(e.target.value)}
            rows="4"
            placeholder="Write your note..."
            className="input-base resize-none"
          />
          <div className="flex gap-2 pt-2">
            <button onClick={() => onSaveEdit(note.id)} className="btn-sm text-emerald-400 hover:text-emerald-300 hover:bg-emerald-400/10 flex-1">
              Save
            </button>
            <button onClick={onCancelEdit} className="btn-sm text-slate-400 hover:text-slate-300 hover:bg-slate-700 flex-1">
              Cancel
            </button>
          </div>
        </div>
      ) : (
        <>
          <div>
            <h3 className="font-semibold text-slate-100 group-hover:text-cyan-300 transition-colors duration-250">{note.title}</h3>
            <p className="mt-2 text-sm leading-6 text-slate-300 line-clamp-3">{note.content}</p>
          </div>
          <div className="mt-4 flex items-center justify-between border-t border-slate-800 pt-3 text-xs text-slate-400">
            <span>{note.createdAt}</span>
            <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-250">
              <button onClick={() => onEdit(note.id)} className="btn-sm text-cyan-400 hover:text-cyan-300 hover:bg-cyan-400/10">
                Edit
              </button>
              <button onClick={() => onDelete(note.id)} className="btn-sm text-rose-400 hover:text-rose-300 hover:bg-rose-400/10">
                Delete
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default NoteCard;
