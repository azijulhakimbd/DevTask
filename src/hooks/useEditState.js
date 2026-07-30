import { useState } from 'react';

/**
 * Shared hook for managing edit state (title, content, id)
 * Reduces duplicate code between task and note editing
 */
export function useEditState() {
  const [editId, setEditId] = useState(null);
  const [editTitle, setEditTitle] = useState('');
  const [editContent, setEditContent] = useState('');

  const startEditing = (item) => {
    setEditId(item.id);
    setEditTitle(item.title || '');
    setEditContent(item.content || '');
  };

  const cancelEditing = () => {
    setEditId(null);
    setEditTitle('');
    setEditContent('');
  };

  const resetEditState = () => {
    cancelEditing();
  };

  return {
    editId,
    editTitle,
    setEditTitle,
    editContent,
    setEditContent,
    startEditing,
    cancelEditing,
    resetEditState,
  };
}
