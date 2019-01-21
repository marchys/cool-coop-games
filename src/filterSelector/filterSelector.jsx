import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { VisibilityFilters, setVisibilityFilter } from './redux/actions';

export function filterSelector({ changeVisibilityFilter }) {
  return (
    // Executing the ACTION CREATOR changing to a new state
    <select onChange={changeVisibilityFilter}>
      <option value={VisibilityFilters.SHOW_ALL} defaultValue>
        All
      </option>
      <option value={VisibilityFilters.SHOW_PENDING}>Pending</option>
      <option value={VisibilityFilters.SHOW_PLAYING}>Playing</option>
      <option value={VisibilityFilters.SHOW_FINISHED}>Finished</option>
    </select>
  );
}

const mapDispatchToProps = dispatch => ({
  changeVisibilityFilter: e => dispatch(setVisibilityFilter(e.target.value)),
});

export default connect(
  null,
  mapDispatchToProps,
)(filterSelector);

filterSelector.propTypes = {
  changeVisibilityFilter: PropTypes.func.isRequired,
};
