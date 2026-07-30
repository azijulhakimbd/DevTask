import { useState } from 'react';
import Header from '../components/Header';
import Navbar from '../components/Navbar';
import StatCard from '../components/StatCard';
import TaskForm from '../components/TaskForm';
import TaskList from '../components/TaskList';
import NoteForm from '../components/NoteForm';
import NoteList from '../components/NoteList';
import Footer from '../components/Footer';
import useTodos from '../hooks/useTodos';
import useNotes from '../hooks/useNotes';

function HomePage() {
  const {
    tasks,
    taskInput,
    setTaskInput,
    editTaskId,
    editValue,
    setEditValue,
    searchQuery,
    setSearchQuery,
    filterStatus,
    setFilterStatus,
    completedTasks,
    remainingTasks,
    addTask,
    toggleTask,
    deleteTask,
    startEditingTask,
    saveEditTask,
    cancelEditTask,
  } = useTodos();

  const [taskError, setTaskError] = useState('');

  const {
    notes,
    noteTitle,
    setNoteTitle,
    noteContent,
    setNoteContent,
    editNoteId,
    editTitle,
    setEditTitle,
    editContent,
    setEditContent,
    noteSearchQuery,
    setNoteSearchQuery,
    sortOrder,
    setSortOrder,
    addNote,
    deleteNote,
    startEditingNote,
    saveEditNote,
    cancelEditNote,
  } = useNotes();

  const [noteError, setNoteError] = useState('');

  return (
    <div className="min-h-screen bg-transparent px-3 py-4 text-slate-100 sm:px-6 lg:px-8 lg:py-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 sm:gap-8">
        <Navbar />
        <Header completedTasks={completedTasks} totalTasks={tasks.length} />

        <section id="focus" className="card-hover p-6 sm:p-8 lg:p-10 bg-gradient-to-br from-slate-900/90 via-slate-900/70 to-cyan-950/80 animate-slideUp">
          <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
            <div>
              <p className="mb-3 inline-flex rounded-full border border-cyan-400/20 bg-cyan-500/10 px-3 py-1 text-xs sm:text-sm font-medium text-cyan-300">
                Modern productivity workspace
              </p>
              <h1 className="text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">
                Organize your day with clarity and calm.
              </h1>
              <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-300 sm:text-base lg:text-lg">
                Capture tasks, store notes, and keep momentum flowing from a single beautiful dashboard.
              </p>
              <div className="mt-6 flex flex-col sm:flex-row gap-3">
                <button className="btn-primary">
                  Start planning
                </button>
                <button className="btn-secondary">
                  Explore notes
                </button>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 auto-rows-max">
              <StatCard label="Focus" value="8/10" accent="bg-cyan-500/10 text-cyan-300" />
              <StatCard label="Tasks" value={tasks.length} accent="bg-violet-500/10 text-violet-300" />
              <StatCard label="Done" value={completedTasks} accent="bg-emerald-500/10 text-emerald-300" />
              <StatCard label="Remaining" value={remainingTasks} accent="bg-amber-500/10 text-amber-300" />
              <StatCard label="Notes" value={notes.length} accent="bg-fuchsia-500/10 text-fuchsia-300" />
            </div>
          </div>
        </section>

        <main className="grid gap-6 sm:gap-8 lg:grid-cols-[1.05fr_0.95fr]">
          <section id="tasks" className="space-y-4 sm:space-y-6 min-w-0">
            <TaskForm taskInput={taskInput} setTaskInput={setTaskInput} addTask={addTask} error={taskError} setError={setTaskError} />
            <TaskList
              tasks={tasks}
              toggleTask={toggleTask}
              deleteTask={deleteTask}
              editTaskId={editTaskId}
              editValue={editValue}
              setEditValue={setEditValue}
              startEditing={startEditingTask}
              saveEdit={saveEditTask}
              cancelEdit={cancelEditTask}
              searchQuery={searchQuery}
              setSearchQuery={setSearchQuery}
              filterStatus={filterStatus}
              setFilterStatus={setFilterStatus}
            />
          </section>

          <section id="notes" className="space-y-4 sm:space-y-6 min-w-0">
            <NoteForm
              noteTitle={noteTitle}
              setNoteTitle={setNoteTitle}
              noteContent={noteContent}
              setNoteContent={setNoteContent}
              addNote={addNote}
              error={noteError}
              setError={setNoteError}
            />
            <NoteList
              notes={notes}
              deleteNote={deleteNote}
              searchQuery={noteSearchQuery}
              setSearchQuery={setNoteSearchQuery}
              sortOrder={sortOrder}
              setSortOrder={setSortOrder}
              editNoteId={editNoteId}
              editTitle={editTitle}
              setEditTitle={setEditTitle}
              editContent={editContent}
              setEditContent={setEditContent}
              startEditing={startEditingNote}
              saveEdit={saveEditNote}
              cancelEdit={cancelEditNote}
            />
          </section>
        </main>

        <Footer />
      </div>
    </div>
  );
}

export default HomePage;
