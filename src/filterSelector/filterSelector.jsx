import React from 'react';
import { VisibilityFilters, setVisibilityFilter } from './redux/actions';

export default function filterSelector() {
  return (
    <select onChange={e => setVisibilityFilter(e.target.value)}>
      <option value={VisibilityFilters.SHOW_ALL} selected>
        All
      </option>
      <option value={VisibilityFilters.SHOW_PENDING}>Pending</option>
      <option value={VisibilityFilters.SHOW_PLAYING}>Playing</option>
      <option value={VisibilityFilters.SHOW_FINISHED}>Finished</option>
    </select>
  );
}
