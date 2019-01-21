// Define the ACTION type
export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER';

// Define the different states of the ACTION
export const VisibilityFilters = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_PENDING: 'PENDING',
  SHOW_PLAYING: 'PLAYING',
  SHOW_FINISHED: 'FINISHED',
};

// Set the ACTION CREATOR
export function setVisibilityFilter(filter) {
  // Return type and states for the ACTION
  return { type: SET_VISIBILITY_FILTER, filter };
}
