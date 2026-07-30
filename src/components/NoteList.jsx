import NoteCard from './NoteCard';

function NoteList({
  notes,
  deleteNote,
  searchQuery,
  setSearchQuery,
  sortOrder,
  setSortOrder,
  editNoteId,
  editTitle,
  setEditTitle,
  editContent,
  setEditContent,
  startEditing,
  saveEdit,
  cancelEdit,
}) {
  const sortedNotes = [...notes].sort((a, b) => {
    if (sortOrder === 'newest') {
      return new Date(b.createdAt) - new Date(a.createdAt);
    }
    return new Date(a.createdAt) - new Date(b.createdAt);
  });

  const filteredNotes = sortedNotes.filter((note) => {
    const query = searchQuery.toLowerCase();
    return note.title.toLowerCase().includes(query) || note.content.toLowerCase().includes(query);
  });

  return (
    <div className="rounded-3xl border border-white/10 bg-slate-900/70 p-5 shadow-xl shadow-black/20 backdrop-blur">
      <div className="mb-4 flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
        <div>
          <h2 className="text-xl font-semibold">Notes Manager</h2>
          <p className="mt-1 text-sm text-slate-400">Search, sort, and organize your ideas.</p>
        </div>
        <div className="text-sm text-slate-400">{notes.length} saved</div>
      </div>

      <div className="mb-4 flex flex-col gap-3 sm:flex-row">
        <input
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search notes by title or content"
          className="flex-1 rounded-2xl border border-slate-700 bg-slate-950/70 px-4 py-3 text-sm outline-none placeholder:text-slate-400"
        />
        <select
          value={sortOrder}
          onChange={(e) => setSortOrder(e.target.value)}
          className="rounded-2xl border border-slate-700 bg-slate-950/70 px-4 py-3 text-sm outline-none"
        >
          <option value="newest">Newest first</option>
          <option value="oldest">Oldest first</option>
        </select>
      </div>

      <div className="grid gap-3 md:grid-cols-2">
        {filteredNotes.length === 0 ? (
          <p className="rounded-2xl border border-dashed border-slate-700 p-4 text-sm text-slate-400 md:col-span-2">
            No notes found. Try a different search or create a new one.
          </p>
        ) : (
          filteredNotes.map((note) => (
            <NoteCard
              key={note.id}
              note={note}
              onDelete={deleteNote}
              onEdit={startEditing}
              isEditing={editNoteId === note.id}
              editTitle={editTitle}
              setEditTitle={setEditTitle}
              editContent={editContent}
              setEditContent={setEditContent}
              onSaveEdit={saveEdit}
              onCancelEdit={cancelEdit}
            />
          ))
        )}
      </div>
    </div>
  );
}

export default NoteList;
