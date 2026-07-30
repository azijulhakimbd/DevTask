import { useMemo, useState } from 'react';
import useLocalStorage from './useLocalStorage';
import { validateString } from '../utils/helpers';

/**
 * Factory function to create item management hooks (tasks, notes)
 * Reduces duplicate code between useTodos and useNotes
 */
export function createItemHook(storageKey, initialData, config = {}) {
  const {
    minLength = 3,
    createItem,
    updateItem,
    getId = item => item.id,
  } = config;

  return function useItemManager() {
    const [items, setItems] = useLocalStorage(storageKey, initialData);
    const [inputValue, setInputValue] = useState('');
    const [editId, setEditId] = useState(null);
    const [editValue, setEditValue] = useState('');
    const [searchQuery, setSearchQuery] = useState('');

    // Derived stats
    const completedCount = useMemo(
      () => items.filter(item => item.completed).length,
      [items]
    );
    const activeCount = useMemo(
      () => items.filter(item => !item.completed).length,
      [items]
    );

    const addItem = (e) => {
      e.preventDefault();
      const validated = validateString(inputValue, minLength);
      if (!validated) return;

      const newItem = createItem(validated);
      setItems(prev => [newItem, ...prev]);
      setInputValue('');
    };

    const deleteItem = (id) => {
      setItems(prev => prev.filter(item => getId(item) !== id));
    };

    const toggleItem = (id) => {
      setItems(prev =>
        prev.map(item =>
          getId(item) === id ? { ...item, completed: !item.completed } : item
        )
      );
    };

    const startEditing = (id) => {
      const item = items.find(i => getId(i) === id);
      if (item) {
        setEditId(id);
        setEditValue(updateItem ? item.title : item.value || '');
      }
    };

    const saveEdit = (id) => {
      const validated = validateString(editValue, minLength);
      if (!validated) return;

      setItems(prev =>
        prev.map(item =>
          getId(item) === id
            ? { ...item, [updateItem ? 'title' : 'value']: validated }
            : item
        )
      );
      cancelEdit();
    };

    const cancelEdit = () => {
      setEditId(null);
      setEditValue('');
    };

    return {
      items,
      setItems,
      inputValue,
      setInputValue,
      editId,
      editValue,
      setEditValue,
      searchQuery,
      setSearchQuery,
      completedCount,
      activeCount,
      addItem,
      deleteItem,
      toggleItem,
      startEditing,
      saveEdit,
      cancelEdit,
    };
  };
}
