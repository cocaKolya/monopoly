import styled from 'styled-components';
import GameItem from './GameItem';

const GameListDiv = styled('div')`
  display: flex;
  flex-wrap: wrap;
  margin-right: -10px;
  width: calc(100%+10px);
`;

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
