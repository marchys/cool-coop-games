import React from 'react';
import PropTypes from 'prop-types';

import styled, { css } from 'react-emotion';

const Container = styled('div')`
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: green;
`;

export default function PlayerCount({ appId, playerCount }) {
  return (
    <Container>
      <p
        className={css`
          color: mediumspringgreen;
        `}
      >
        ID: {appId}
      </p>
      <p className={css({ color: 'cornsilk' })}>Count: {playerCount}</p>
    </Container>
  );
}

PlayerCount.propTypes = {
  appId: PropTypes.string.isRequired,
  playerCount: PropTypes.number.isRequired,
};
