import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import compose from 'lodash/fp/compose';

import Loading from 'components/Loading';
import actions from 'appsCurrentPlayers/redux/actions';
import selectors from 'appsCurrentPlayers/redux/selectors';
import propTypes from 'appsCurrentPlayers/redux/propTypes';

export class AppCurrentPlayers extends React.Component {
  componentDidMount() {
    const { appId, getCurrentPlayers } = this.props;
    getCurrentPlayers(appId);
  }

  render() {
    const { appId, currentPlayers } = this.props;

    if (!currentPlayers || !currentPlayers.loaded) {
      return <Loading />;
    }

    return (
      <div>
        <p>{appId}</p>
        <p>{currentPlayers.playerCount}</p>
      </div>
    );
  }
}

AppCurrentPlayers.propTypes = {
  getCurrentPlayers: PropTypes.func.isRequired,
  appId: PropTypes.string.isRequired,
  currentPlayers: propTypes.currentPlayers,
};

AppCurrentPlayers.defaultProps = {
  currentPlayers: void 0,
};

const mapStateToProps = (state, props) =>
  createStructuredSelector({
    currentPlayers: selectors.currentPlayersByAppId(props.appId),
  })(state, props);

const connectToStore = connect(
  mapStateToProps,
  {
    getCurrentPlayers: actions.getCurrentPlayers,
  },
);

export default compose(connectToStore)(AppCurrentPlayers);
