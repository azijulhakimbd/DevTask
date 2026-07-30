import { useEffect, useMemo, useState } from 'react';
import Header from '../components/Header';
import TaskForm from '../components/TaskForm';
import TaskList from '../components/TaskList';
import NoteForm from '../components/NoteForm';
import NoteList from '../components/NoteList';
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

  const addNote = (e) => {
    e.preventDefault();
    if (!noteTitle.trim() || !noteContent.trim()) return;
    setNotes((prev) => [{ id: Date.now(), title: noteTitle.trim(), content: noteContent.trim() }, ...prev]);
    setNoteTitle('');
    setNoteContent('');
  };

  const deleteNote = (id) => {
    setNotes((prev) => prev.filter((note) => note.id !== id));
  };

  return (
    <div className="min-h-screen bg-transparent px-4 py-8 text-slate-100 sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-6">
        <Header completedTasks={completedTasks} totalTasks={tasks.length} />

        <main className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <section className="space-y-6">
            <TaskForm taskInput={taskInput} setTaskInput={setTaskInput} addTask={addTask} />
            <TaskList tasks={tasks} toggleTask={toggleTask} deleteTask={deleteTask} />
          </section>

          <section className="space-y-6">
            <NoteForm
              noteTitle={noteTitle}
              setNoteTitle={setNoteTitle}
              noteContent={noteContent}
              setNoteContent={setNoteContent}
              addNote={addNote}
            />
            <NoteList notes={notes} deleteNote={deleteNote} />
          </section>
        </main>
      </div>
    </div>
  );
}

export default HomePage;
