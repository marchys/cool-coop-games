import React from 'react';
import { connect } from 'react-redux';
import gameList from '../../gameList';

import GameInfoContainer from '../../gameInfoContainer/gameInfoContainer';
import FilterSelector from '../../filterSelector/filterSelector';

const insertGameContainers = props => {
  const gameListValues = Object.values(gameList);
  const currFilter = props.visibilityFilter;

  return gameListValues.map(curr => {
    if (currFilter === 'SHOW_ALL') {
      return (
        <GameInfoContainer
          key={curr.title}
          name={curr.title}
          status={curr.status}
          steamId={curr.steamId}
        />
      );
    }
    if (currFilter === curr.status) {
      return (
        <GameInfoContainer
          key={curr.title}
          name={curr.title}
          status={curr.status}
          steamId={curr.steamId}
        />
      );
    }
    return null;
  });
};

export function gameListPrinter(props) {
  return (
    <div>
      <FilterSelector />
      <h1>Our Cool Games</h1>
      {insertGameContainers(props)}
    </div>
  );
}

const mapStateToProps = state => ({
  visibilityFilter: state.visibilityFilter,
});

export default connect(mapStateToProps)(gameListPrinter);
