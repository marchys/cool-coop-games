import React from 'react';
import gameList from '../../gameList';

import GameInfoContainer from '../../gameInfoContainer/gameInfoContainer';
import FilterSelector from '../../filterSelector/filterSelector';

const insertGameContainers = () => {
  const gameContainersList = [];
  const gameListValues = Object.values(gameList);

  for (let index = 0; index < gameListValues.length; index + 1) {
    gameContainersList.push(
      <GameInfoContainer
        key={index}
        name={gameListValues[index].title}
        status={gameListValues[index].status}
      />,
    );
  }

  return gameContainersList;
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
