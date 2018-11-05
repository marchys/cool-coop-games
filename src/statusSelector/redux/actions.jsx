export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER';

export const VisibilityFilters = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_PENDING: 'SHOW_PENDING',
  SHOW_PLAYING: 'SHOW_PLAYING',
  SHOW_FINISHED: 'SHOW_FINISHED',
};

export function setVisibilityFilter(filter) {
  return { type: SET_VISIBILITY_FILTER, filter };
}
