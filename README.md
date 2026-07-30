# DevTask

A clean and modern productivity app for managing your daily todos and notes in one place. DevTask helps you stay organized with a simple dashboard that supports task tracking, note-taking, search, filtering, sorting, and persistent storage in the browser.

## Project Overview

DevTask is a lightweight React application built with Vite and Tailwind CSS. It combines two core productivity tools:

- A todo manager for tracking tasks and progress
- A notes workspace for saving ideas, reminders, and meeting notes

The app is designed to feel polished, responsive, and easy to use while keeping everything local for a fast and private experience.

## Features

- Add, complete, edit, and delete tasks
- Search tasks by keyword
- Filter tasks by status (all, active, completed)
- Create, edit, delete, and search notes
- Sort notes by newest or oldest
- Local storage persistence so data remains after refresh
- Responsive layout for desktop and mobile screens
- Modern UI with a polished dashboard experience

## Tech Stack

- React.js
- Vite
- Tailwind CSS
- JavaScript (ES6+)
- LocalStorage API for persistence

## Installation

1. Clone the repository
   ```bash
   git clone https://github.com/azijulhakimbd/DevTask
   cd DevTask
   ```

2. Install dependencies
   ```bash
   npm install
   ```

3. Start the development server
   ```bash
   npm run dev
   ```

4. Open your browser and visit:
   ```bash
   http://localhost:5173
   ```

## Folder Structure

```bash
src/
  components/
    EmptyState.jsx
    Footer.jsx
    Header.jsx
    Navbar.jsx
    NoteCard.jsx
    NoteForm.jsx
    NoteList.jsx
    SkeletonLoader.jsx
    StatCard.jsx
    TaskForm.jsx
    TaskList.jsx
    TodoCard.jsx
  hooks/
    createItemHook.js
    useEditState.js
    useLocalStorage.js
    useNotes.js
    useTodos.js
  pages/
    HomePage.jsx
  utils/
    animation.js
    helpers.js
    storage.js
  App.jsx
  main.jsx
  styles.css
```


## Future Improvements

- Add drag-and-drop task organization
- Support task categories and priority levels
- Add dark/light theme toggle
- Implement note tagging and filtering
- Add cloud sync and authentication
- Improve animations and accessibility
