// String validation helpers
export const validateString = (str, minLength = 1) => {
  return str.trim().length >= minLength;
};

export const getValidatedInput = (str, minLength = 1) => {
  const trimmed = str.trim();
  return validateString(str, minLength) ? trimmed : null;
};

// Filter and search helpers
export const filterBySearch = (items, query, searchFields) => {
  if (!query.trim()) return items;
  const lowerQuery = query.toLowerCase();
  return items.filter(item =>
    searchFields.some(field => 
      item[field]?.toLowerCase().includes(lowerQuery)
    )
  );
};

export const filterByStatus = (tasks, status) => {
  if (status === 'all') return tasks;
  if (status === 'completed') return tasks.filter(t => t.completed);
  if (status === 'active') return tasks.filter(t => !t.completed);
  return tasks;
};

// Sort helpers
export const sortByDate = (items, order = 'newest') => {
  return [...items].sort((a, b) => {
    const dateA = new Date(a.createdAt);
    const dateB = new Date(b.createdAt);
    return order === 'newest' ? dateB - dateA : dateA - dateB;
  });
};

// Combine filtering operations
export const applyFilters = (items, { query, searchFields, status = null, sort = null }) => {
  let filtered = filterBySearch(items, query, searchFields);
  if (status) filtered = filterByStatus(filtered, status);
  if (sort) filtered = sortByDate(filtered, sort);
  return filtered;
};
