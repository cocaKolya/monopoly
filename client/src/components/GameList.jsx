import styled from 'styled-components';
import GameItem from './GameItem';

const GameListDiv = styled('div')``;

function GameList({ db }) {
  return (
    <GameListDiv>
      {db.map((el) => (
        <GameItem game={el} />
      ))}
    </GameListDiv>
  );
}
export default GameList;
