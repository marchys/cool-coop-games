// Define the ACTION type
export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER';

// Define the different states of the ACTION
export const VisibilityFilters = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_PENDING: 'SHOW_PENDING',
  SHOW_PLAYING: 'SHOW_PLAYING',
  SHOW_FINISHED: 'SHOW_FINISHED',
};

// Set the ACTION CREATOR
export function setVisibilityFilter(filter) {
  // Return type and states for the ACTION
  return { type: SET_VISIBILITY_FILTER, filter };
}
