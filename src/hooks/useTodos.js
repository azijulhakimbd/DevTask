import { useMemo, useState } from 'react';
import useLocalStorage from './useLocalStorage';

const initialTasks = [
  { id: 1, title: 'Plan the day', completed: true },
  { id: 2, title: 'Review AI notes', completed: false },
];

function useTodos() {
  const [tasks, setTasks] = useLocalStorage('devtask-tasks', initialTasks);
  const [taskInput, setTaskInput] = useState('');
  const [editTaskId, setEditTaskId] = useState(null);
  const [editValue, setEditValue] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const [filterStatus, setFilterStatus] = useState('all');

  const completedTasks = useMemo(() => tasks.filter((task) => task.completed).length, [tasks]);
  const remainingTasks = useMemo(() => tasks.filter((task) => !task.completed).length, [tasks]);

  const addTask = (e) => {
    e.preventDefault();
    const trimmed = taskInput.trim();
    if (trimmed.length < 3) return;

    setTasks((prev) => [{ id: Date.now(), title: trimmed, completed: false }, ...prev]);
    setTaskInput('');
  };

  const toggleTask = (id) => {
    setTasks((prev) => prev.map((task) => (task.id === id ? { ...task, completed: !task.completed } : task)));
  };

  const deleteTask = (id) => {
    setTasks((prev) => prev.filter((task) => task.id !== id));
  };

  const startEditingTask = (id) => {
    const task = tasks.find((item) => item.id === id);
    if (task) {
      setEditTaskId(id);
      setEditValue(task.title);
    }
  };

  const saveEditTask = (id) => {
    const value = editValue.trim();
    if (!value) return;

    setTasks((prev) => prev.map((task) => (task.id === id ? { ...task, title: value } : task)));
    setEditTaskId(null);
    setEditValue('');
  };

  const cancelEditTask = () => {
    setEditTaskId(null);
    setEditValue('');
  };

  return {
    tasks,
    setTasks,
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
  };
}

export default useTodos;
