export function EmptyTasks() {
  return (
    <div className="flex flex-col items-center justify-center py-12 px-4 animate-fadeIn">
      <div className="text-5xl mb-4">✓</div>
      <h3 className="text-lg font-semibold text-slate-200 mb-2">No tasks yet</h3>
      <p className="text-sm text-slate-400 text-center max-w-xs">
        Create your first task to get started. Break down your goals into actionable steps.
      </p>
    </div>
  );
}

export function EmptyNotes() {
  return (
    <div className="flex flex-col items-center justify-center py-12 px-4 animate-fadeIn">
      <div className="text-5xl mb-4">📝</div>
      <h3 className="text-lg font-semibold text-slate-200 mb-2">No notes yet</h3>
      <p className="text-sm text-slate-400 text-center max-w-xs">
        Start capturing your ideas. Notes help you remember important details and inspiration.
      </p>
    </div>
  );
}

export function EmptySearchResults() {
  return (
    <div className="flex flex-col items-center justify-center py-12 px-4 animate-fadeIn">
      <div className="text-5xl mb-4">🔍</div>
      <h3 className="text-lg font-semibold text-slate-200 mb-2">No results found</h3>
      <p className="text-sm text-slate-400 text-center max-w-xs">
        Try a different search term or clear filters to see all items.
      </p>
    </div>
  );
}
