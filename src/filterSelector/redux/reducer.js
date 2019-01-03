// Import the ACTION type and states
import { SET_VISIBILITY_FILTER, VisibilityFilters } from './actions';

// Set the default state
const { SHOW_ALL } = VisibilityFilters.SHOW_ALL;

// Handle the SET_VISIBILITY_FILTER ACTION
function visibilityFilter(state = SHOW_ALL, action) {
  switch (action.type) {
    case SET_VISIBILITY_FILTER:
      return action.filter;
    default:
      return state;
  }
}

export default visibilityFilter;
