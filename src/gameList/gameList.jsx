import React from 'react';
import GameContainerInfo from '../gameContainerInfo/gameContainerInfo';

export default function Games() {
  return (
    <div>
      <h1> Our Cool Games</h1>
      <GameContainerInfo name="Game 1" status="pending" />
      <GameContainerInfo name="Game 2" status="playing" />
      <GameContainerInfo name="Game 3" status="finished" />
      <GameContainerInfo name="Game 4" status="playing" />
      <GameContainerInfo name="Game 5" status="pending" />
    </div>
  );
}
