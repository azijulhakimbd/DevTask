export function loadFromStorage(key, fallback) {
  if (typeof window === 'undefined') return fallback;

  try {
    const saved = window.localStorage.getItem(key);
    return saved ? JSON.parse(saved) : fallback;
  } catch {
    return fallback;
  }
}

export function saveToStorage(key, value) {
  if (typeof window === 'undefined') return;

  window.localStorage.setItem(key, JSON.stringify(value));
}

export function removeFromStorage(key) {
  if (typeof window === 'undefined') return;

  window.localStorage.removeItem(key);
}
