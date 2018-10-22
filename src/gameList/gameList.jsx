import React from 'react';
import GameInfoContainer from '../gameInfoContainer/gameInfoContainer';

export default function Games() {
  return (
    <div>
      <h1> Our Cool Games</h1>
      <GameInfoContainer name="Game 1" status="pending" />
      <GameInfoContainer name="Game 2" status="playing" />
      <GameInfoContainer name="Game 3" status="finished" />
      <GameInfoContainer name="Game 4" status="playing" />
      <GameInfoContainer name="Game 5" status="pending" />
    </div>
  );
}
