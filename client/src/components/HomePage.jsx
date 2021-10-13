import { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import styled from 'styled-components';
import { addGame, getGames, getUserGames } from '../redux/actions/gameActions';
import { checkUser } from '../redux/actions/userAction';
import { createSocketOnMessage } from '../utils/socket.message';
import { Button } from './atoms/Button';
import GameList from './GameList';

const fakeGames = [
  { name: 'игра', gamer1: 'stas', gamer2: 'taras', gamer3: 'oleg' },
  { name: 'игра', gamer1: 'stas', gamer2: 'taras' },
  {
    name: 'игра',
    gamer1: 'stas',
    gamer2: 'taras',
    gamer3: 'oleg',
    games4: 'ivan',
  },
  { name: 'игра', gamer1: 'stas', gamer2: 'taras', gamer3: 'oleg' },
];

const fakeProcessGames = [
  { name: 'игра', gamer1: 'stas', gamer2: 'taras', gamer3: 'oleg' },
  { name: 'игра', gamer1: 'stas', gamer2: 'taras' },
  { name: 'игра', gamer1: 'stas', gamer2: 'taras', gamer3: 'oleg' },
];

const HomeWrapper = styled('div')`
  display: flex;
  flex-direction: column;
  padding: 0 40px;
  width: 100%;
  max-width: 900px;
  margin: 0 auto;
  justify-content: space-between;
`;
const Row = styled('div')`
  display: flex;
  flex-direction: column;
`;

const Header = styled('div')`
  margin-top: 50px;
`;

const Text = styled.p`
  color: white;
  font-size: 20pt;
`;

function HomePage() {
  const url = process.env.REACT_APP_URL_SOCKET;
  const socket = useRef(new WebSocket(url));
  const dispatch = useDispatch();
  const history = useHistory();

  const user = useSelector((state) => state.user);
  const games = useSelector((state) => state.games);
  const currentGame = useSelector((state) => state.currentGame);
  const userGames = useSelector((state) => state.userGames);
  // const notUserGames = games.filter((el) => el.owner !== user.id);
  console.log('im gameeee', games);
  useEffect(() => {
    const socketOnMessage = createSocketOnMessage(dispatch);
    socket.current.onmessage = socketOnMessage;


    dispatch(getGames());
    dispatch(checkUser());
    if (user) dispatch(getUserGames(user?.id));
  }, []);

  const GameStarter = (owner) => {
    dispatch(addGame(owner));
  };

  const isFirstRun = useRef(true);
  useEffect(() => {
    if (isFirstRun.current) {
      isFirstRun.current = false;
      return;
    }
    if (currentGame) {
      history.push(`/game/${currentGame.key}/lobby`);
    }
  }, [currentGame]);

  return (
    <>
      <Header>
        <Button text={'Создать игру'} onClick={() => GameStarter(user?.id)} />
      </Header>
      <HomeWrapper>
        <Row>
          <Text>Ваши активные игры:</Text>
          {userGames && <GameList db={userGames} active={true} />}
        </Row>
        <Row>
          <Text>Присоединиться к игре:</Text>
          {games && <GameList db={games} />}
        </Row>
      </HomeWrapper>
    </>
  );
}

export default HomePage;
