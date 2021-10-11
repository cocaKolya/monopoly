import styled from 'styled-components';
import { Button } from './Button';

const GameWrapper = styled('div')`
  border: 3px solid black;
  background-color: white;
  margin: 10px;
  padding: 10px;
  border-radius: 10px;
`;

const PlayersWrapper = styled('div')`
  display: flex;
`;
const Player = styled('div')`
  margin: 10px;
`;

function GameItem({ game }) {
  return (
    <GameWrapper>
      <div>{game.name}</div>
      <PlayersWrapper>
        <Player>{game.gamer1}</Player>
        <Player>{game.gamer2}</Player>
        {game.gamer3 && <Player>{game.gamer3}</Player>}
        {game.gamer4 && <Player>{game.gamer4}</Player>}
      </PlayersWrapper>
      <Button text={'join'} />
    </GameWrapper>
  );
}

export default GameItem;
