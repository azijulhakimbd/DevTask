/**
 * Reusable EmptyState component configuration
 * Reduces duplicate code for different empty states
 */
export const EMPTY_STATES = {
  tasks: {
    icon: '✓',
    title: 'No tasks yet',
    message: 'Create your first task to get started. Break down your goals into actionable steps.',
  },
  notes: {
    icon: '📝',
    title: 'No notes yet',
    message: 'Start capturing your ideas. Notes help you remember important details and inspiration.',
  },
  search: {
    icon: '🔍',
    title: 'No results found',
    message: 'Try a different search term or clear filters to see all items.',
  },
};

export function EmptyState({ icon, title, message }) {
  return (
    <div className="flex flex-col items-center justify-center py-12 px-4 animate-fadeIn">
      <div className="text-5xl mb-4">{icon}</div>
      <h3 className="text-lg font-semibold text-slate-200 mb-2">{title}</h3>
      <p className="text-sm text-slate-400 text-center max-w-xs">{message}</p>
    </div>
  );
}

export function EmptyTasks() {
  return <EmptyState {...EMPTY_STATES.tasks} />;
}

export function EmptyNotes() {
  return <EmptyState {...EMPTY_STATES.notes} />;
}

export function EmptySearchResults() {
  return <EmptyState {...EMPTY_STATES.search} />;
}
