import PropTypes from 'prop-types';

export default {
  currentPlayers: PropTypes.shape({
    id: PropTypes.string.isRequired,
    loading: PropTypes.bool.isRequired,
    loaded: PropTypes.bool.isRequired,
    playerCount: PropTypes.number,
    error: PropTypes.object,
  }),
};
