// Animation delay helper
export const getStaggerDelay = (index, baseDelay = 50) => {
  return `${index * baseDelay}ms`;
};

export const getAnimationStyle = (index, baseDelay = 50) => {
  return {
    animation: `slideUp 0.4s ease-out ${getStaggerDelay(index, baseDelay)} backwards`,
  };
};

// Animation duration constants
export const ANIMATION_DURATION = {
  SHORT: '250ms',
  MEDIUM: '300ms',
  LONG: '400ms',
};
