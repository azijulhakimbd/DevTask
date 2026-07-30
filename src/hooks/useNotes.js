import { useState } from 'react';
import useLocalStorage from './useLocalStorage';

const initialNotes = [
  { id: 1, title: 'Project idea', content: 'Build a calm dashboard with focus modes.', createdAt: '7/30/2026' },
  { id: 2, title: 'Meeting prep', content: 'Gather insights and action items for tomorrow.', createdAt: '7/30/2026' },
];

function useNotes() {
  const [notes, setNotes] = useLocalStorage('devtask-notes', initialNotes);
  const [noteTitle, setNoteTitle] = useState('');
  const [noteContent, setNoteContent] = useState('');
  const [editNoteId, setEditNoteId] = useState(null);
  const [editTitle, setEditTitle] = useState('');
  const [editContent, setEditContent] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const [sortOrder, setSortOrder] = useState('newest');

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

  return {
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
    searchQuery,
    setSearchQuery,
    sortOrder,
    setSortOrder,
    addNote,
    deleteNote,
    startEditingNote,
    saveEditNote,
    cancelEditNote,
  };
}

export default useNotes;
