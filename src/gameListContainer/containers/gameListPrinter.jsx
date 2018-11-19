import React from 'react';
import gameList from '../../gameList';

import GameInfoContainer from '../../gameInfoContainer/gameInfoContainer';
import FilterSelector from '../../filterSelector/filterSelector';

const insertGameContainers = () => {
  const gameListValues = Object.values(gameList);

  return gameListValues.map(curr => (
    <GameInfoContainer key={curr.title} name={curr.title} status={curr.status} />
  ));
};

export default class gameListPrinter extends React.Component {
  render() {
    return (
      <div>
        <FilterSelector />
        <h1>Our Cool Games</h1>
        {insertGameContainers()}
      </div>
    );
  }
}
