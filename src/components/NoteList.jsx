import NoteCard from './NoteCard';
import { EmptyNotes, EmptySearchResults } from './EmptyState';

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
    const query = (searchQuery || '').toLowerCase();
    return note.title.toLowerCase().includes(query) || note.content.toLowerCase().includes(query);
  });

  return (
    <div className="card-hover p-5 sm:p-6 animate-slideUp">
      <div className="mb-6 flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
        <div>
          <h2 className="text-xl font-semibold">Notes Manager</h2>
          <p className="mt-1 text-sm text-slate-400">Search, sort, and organize your ideas.</p>
        </div>
        <div className="text-sm text-slate-400 font-medium">{notes.length} saved</div>
      </div>

      <div className="mb-6 flex flex-col gap-2 sm:gap-3 sm:flex-row sm:items-end">
        <input
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search notes..."
          className="input-base flex-1 min-w-0"
        />
        <select
          value={sortOrder}
          onChange={(e) => setSortOrder(e.target.value)}
          className="input-base bg-slate-950/70 cursor-pointer w-full sm:w-auto sm:flex-shrink-0"
        >
          <option value="newest">Newest</option>
          <option value="oldest">Oldest</option>
        </select>
      </div>

      <div className="grid gap-3 md:grid-cols-2 lg:gap-4">
        {filteredNotes.length === 0 ? (
          notes.length === 0 ? <EmptyNotes /> : <EmptySearchResults />
        ) : (
          filteredNotes.map((note, idx) => (
            <div key={note.id} style={{ animation: `slideUp 0.4s ease-out ${idx * 50}ms backwards` }}>
              <NoteCard
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
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default NoteList;
