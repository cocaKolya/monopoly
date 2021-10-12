import styled from 'styled-components';
import GameItem from './GameItem';

const GameListDiv = styled('div')``;

function GameList({ db, active }) {
  return (
    <GameListDiv>
      {db.map((el) => (
        <GameItem game={el} active={active} />
      ))}
    </GameListDiv>
  );
}
export default GameList;
