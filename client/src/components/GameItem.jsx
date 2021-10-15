import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import styled from 'styled-components';
import { addUserToGame } from '../redux/actions/gameActions';
import { Button } from './atoms/Button';

function GameItem({ game, active }) {
  const dispatch = useDispatch();
  const history = useHistory();

  const user = useSelector((state) => state.user);
  const games = useSelector((state) => state.games);

  const joinGame = (gameid, userid) => {
    dispatch(addUserToGame(gameid, userid));
    const game = games.find((el) => el.id === gameid);
    history.push(`/game/${game.key}/lobby`);
  };

  const continueGame = (gameKey, inProgress) => {
    const game = games.find((el) => el.key === gameKey);
    inProgress
      ? history.push(`/game/${game.key}`)
      : history.push(`/game/${game.key}/lobby`);
  };

  return (
    <GameWrapper>
      <Text>Monopoly </Text>
      
        <Text>Public Game {game.id}</Text>
      
      {active ? (
        <PlayersWrapper>
          <Button
            text={'continue'}
            onClick={() => continueGame(game.key, game.inprogress)}
          />
          <Button
            text={'quit'}
            // onClick={() => quitGame(game.key, game.inprogress)}   <<<<<<================= сделать
          />
        </PlayersWrapper>
      ) : (
        <Button text={'join'} onClick={() => joinGame(game.id, user.id)} />
      )}
    </GameWrapper>
  );
}

export default GameItem;

const GameWrapper = styled('div')`
  border: 3px solid black;
  background-color: white;
  width: calc(100% / 12 * 4 - 10px);
  margin-right: 10px;
  margin-bottom: 10px;
  padding: 10px;
  border-radius: 10px;
  // > *:not:last-child {
  //   border-bottom: 1px solid black;
  //   margin-bottom: 5px;
  //   padding-bottom: 5px;
  // }
`;

const PlayersWrapper = styled('div')`
  display: flex;
`;
const Player = styled('div')`
  margin: 10px;
`;

const Text = styled.p`
  margin-bottom: 10px;
`;
