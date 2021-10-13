import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import styled from 'styled-components';
import { addUserToGame } from '../redux/actions/gameActions';
import { Button } from './atoms/Button';

const GameWrapper = styled('div')`
  border: 3px solid black;
  background-color: white;
  width: 200px;
  margin: 10px;
  padding: 10px;
  border-radius: 10px;
  > * {
    border-bottom: 1px solid black;
    margin-bottom: 5px;
    padding-bottom: 5px;
  }
`;

const PlayersWrapper = styled('div')`
  display: flex;
`;
const Player = styled('div')`
  margin: 10px;
`;

function GameItem({ game, active }) {
  const dispatch = useDispatch();
  const history = useHistory();

  const user = useSelector((state) => state.user);
  const games = useSelector((state) => state.games);

  const joinGame = (gameid, userid) => {
    // console.log('12312310', gameid, userid);
    dispatch(addUserToGame(gameid, userid));
    const game = games.find((el) => el.id === gameid);
    history.push(`/game/${game.key}/lobby`);
  };

  const continueGame = (gameKey, inProgress) => {
    const game = games.find((el) => el.key === gameKey);
    console.log(game);
    inProgress
      ? history.push(`/game/${game.key}`)
      : history.push(`/game/${game.key}/lobby`);
  };

  console.log(game);
  return (
    <GameWrapper>
      <div>{game.id}</div>
      <PlayersWrapper>
        <div>olololol</div>
        {/* <Player>{game.gamer1}</Player>
        <Player>{game.gamer2}</Player>
        {game.gamer3 && <Player>{game.gamer3}</Player>}
        {game.gamer4 && <Player>{game.gamer4}</Player>} */}
      </PlayersWrapper>
      {active ? (
        <Button
          text={'continue'}
          onClick={() => continueGame(game.key, game.inprogress)}
        />
      ) : (
        <Button text={'join'} onClick={() => joinGame(game.id, user.id)} />
      )}
    </GameWrapper>
  );
}

export default GameItem;
