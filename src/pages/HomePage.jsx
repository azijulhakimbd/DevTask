import { useEffect, useMemo, useState } from 'react';
import Navbar from '../components/Navbar';
import StatCard from '../components/StatCard';
import TaskForm from '../components/TaskForm';
import TaskList from '../components/TaskList';
import NoteForm from '../components/NoteForm';
import NoteList from '../components/NoteList';
import Footer from '../components/Footer';
import { loadFromStorage, saveToStorage } from '../utils/storage';

const initialTasks = [
  { id: 1, title: 'Plan the day', completed: true },
  { id: 2, title: 'Review AI notes', completed: false },
];

const initialNotes = [
  { id: 1, title: 'Project idea', content: 'Build a calm dashboard with focus modes.' },
  { id: 2, title: 'Meeting prep', content: 'Gather insights and action items for tomorrow.' },
];

function HomePage() {
  const [tasks, setTasks] = useState(() => loadFromStorage('devtask-tasks', initialTasks));
  const [notes, setNotes] = useState(() => loadFromStorage('devtask-notes', initialNotes));
  const [taskInput, setTaskInput] = useState('');
  const [noteTitle, setNoteTitle] = useState('');
  const [noteContent, setNoteContent] = useState('');
  const [editTaskId, setEditTaskId] = useState(null);
  const [editValue, setEditValue] = useState('');
  const [editNoteId, setEditNoteId] = useState(null);
  const [editTitle, setEditTitle] = useState('');
  const [editContent, setEditContent] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const [sortOrder, setSortOrder] = useState('newest');

  useEffect(() => {
    saveToStorage('devtask-tasks', tasks);
  }, [tasks]);

  useEffect(() => {
    saveToStorage('devtask-notes', notes);
  }, [notes]);

  const completedTasks = useMemo(() => tasks.filter((task) => task.completed).length, [tasks]);

  const addTask = (e) => {
    e.preventDefault();
    if (!taskInput.trim()) return;
    setTasks((prev) => [{ id: Date.now(), title: taskInput.trim(), completed: false }, ...prev]);
    setTaskInput('');
  };

  const toggleTask = (id) => {
    setTasks((prev) => prev.map((task) => (task.id === id ? { ...task, completed: !task.completed } : task)));
  };

  const deleteTask = (id) => {
    setTasks((prev) => prev.filter((task) => task.id !== id));
  };

  const startEditing = (id) => {
    const task = tasks.find((item) => item.id === id);
    if (task) {
      setEditTaskId(id);
      setEditValue(task.title);
    }
  };

  const saveEdit = (id) => {
    const value = editValue.trim();
    if (!value) return;

    setTasks((prev) => prev.map((task) => (task.id === id ? { ...task, title: value } : task)));
    setEditTaskId(null);
    setEditValue('');
  };

  const cancelEdit = () => {
    setEditTaskId(null);
    setEditValue('');
  };

  const addNote = (e) => {
    e.preventDefault();
    if (!noteTitle.trim() || !noteContent.trim()) return;
    setNotes((prev) => [
      {
        id: Date.now(),
        title: noteTitle.trim(),
        content: noteContent.trim(),
        createdAt: new Date().toLocaleDateString(),
      },
      ...prev,
    ]);
    setNoteTitle('');
    setNoteContent('');
  };

  const deleteNote = (id) => {
    setNotes((prev) => prev.filter((note) => note.id !== id));
  };

  const startEditingNote = (id) => {
    const note = notes.find((item) => item.id === id);
    if (note) {
      setEditNoteId(id);
      setEditTitle(note.title);
      setEditContent(note.content);
    }
  };

  const saveEditNote = (id) => {
    const title = editTitle.trim();
    const content = editContent.trim();
    if (!title || !content) return;

    setNotes((prev) => prev.map((note) => (note.id === id ? { ...note, title, content } : note)));
    setEditNoteId(null);
    setEditTitle('');
    setEditContent('');
  };

  const cancelEditNote = () => {
    setEditNoteId(null);
    setEditTitle('');
    setEditContent('');
  };

  return (
    <div className="min-h-screen bg-transparent px-4 py-5 text-slate-100 sm:px-6 lg:px-8 lg:py-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-6">
        <Navbar />

        <section className="rounded-[2rem] border border-white/10 bg-gradient-to-br from-slate-900/90 via-slate-900/70 to-cyan-950/80 p-6 shadow-2xl shadow-black/30 backdrop-blur sm:p-8 lg:p-10">
          <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
            <div>
              <p className="mb-3 inline-flex rounded-full border border-cyan-400/20 bg-cyan-500/10 px-3 py-1 text-sm font-medium text-cyan-300">
                Modern productivity workspace
              </p>
              <h1 className="text-3xl font-semibold leading-tight sm:text-4xl lg:text-5xl">
                Organize your day with clarity and calm.
              </h1>
              <p className="mt-4 max-w-2xl text-base leading-7 text-slate-300 sm:text-lg">
                Capture tasks, store notes, and keep momentum flowing from a single beautiful dashboard.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <button className="rounded-full bg-cyan-500 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-400">
                  Start planning
                </button>
                <button className="rounded-full border border-white/15 px-5 py-3 text-sm font-semibold text-slate-200 transition hover:bg-white/10">
                  Explore notes
                </button>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <StatCard label="Focus" value="8/10" accent="bg-cyan-500/10 text-cyan-300" />
              <StatCard label="Tasks" value={tasks.length} accent="bg-violet-500/10 text-violet-300" />
              <StatCard label="Done" value={completedTasks} accent="bg-emerald-500/10 text-emerald-300" />
              <StatCard label="Notes" value={notes.length} accent="bg-amber-500/10 text-amber-300" />
            </div>
          </div>
        </section>

        <main className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
          <section id="tasks" className="space-y-6">
            <TaskForm taskInput={taskInput} setTaskInput={setTaskInput} addTask={addTask} />
            <TaskList
              tasks={tasks}
              toggleTask={toggleTask}
              deleteTask={deleteTask}
              editTaskId={editTaskId}
              editValue={editValue}
              setEditValue={setEditValue}
              startEditing={startEditing}
              saveEdit={saveEdit}
              cancelEdit={cancelEdit}
            />
          </section>

          <section id="notes" className="space-y-6">
            <NoteForm
              noteTitle={noteTitle}
              setNoteTitle={setNoteTitle}
              noteContent={noteContent}
              setNoteContent={setNoteContent}
              addNote={addNote}
            />
            <NoteList
              notes={notes}
              deleteNote={deleteNote}
              searchQuery={searchQuery}
              setSearchQuery={setSearchQuery}
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
