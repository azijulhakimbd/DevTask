import { useState } from 'react';
import useLocalStorage from './useLocalStorage';
import { validateString } from '../utils/helpers';

const INITIAL_NOTES = [
  { id: 1, title: 'Project idea', content: 'Build a calm dashboard with focus modes.', createdAt: '7/30/2026' },
  { id: 2, title: 'Meeting prep', content: 'Gather insights and action items for tomorrow.', createdAt: '7/30/2026' },
];

/**
 * Hook for managing notes
 * Handles CRUD operations, searching, and sorting
 */
function useNotes() {
  const [notes, setNotes] = useLocalStorage('devtask-notes', INITIAL_NOTES);
  const [noteTitle, setNoteTitle] = useState('');
  const [noteContent, setNoteContent] = useState('');
  const [editNoteId, setEditNoteId] = useState(null);
  const [editTitle, setEditTitle] = useState('');
  const [editContent, setEditContent] = useState('');
  const [noteSearchQuery, setNoteSearchQuery] = useState('');
  const [sortOrder, setSortOrder] = useState('newest');

  const addNote = (e) => {
    e.preventDefault();
    const title = validateString(noteTitle, 3);
    const content = validateString(noteContent, 3);
    if (!title || !content) return;

    setNotes(prev => [
      {
        id: Date.now(),
        title,
        content,
        createdAt: new Date().toLocaleDateString(),
      },
      ...prev,
    ]);
    setNoteTitle('');
    setNoteContent('');
  };

  const deleteNote = (id) => {
    setNotes(prev => prev.filter(note => note.id !== id));
  };

  const startEditingNote = (id) => {
    const note = notes.find(n => n.id === id);
    if (note) {
      setEditNoteId(id);
      setEditTitle(note.title);
      setEditContent(note.content);
    }
  };

  const saveEditNote = (id) => {
    const title = validateString(editTitle, 3);
    const content = validateString(editContent, 3);
    if (!title || !content) return;

    setNotes(prev =>
      prev.map(note => note.id === id ? { ...note, title, content } : note)
    );
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
    // State
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
    // Actions
    addNote,
    deleteNote,
    startEditingNote,
    saveEditNote,
    cancelEditNote,
  };
}

export default useNotes;
