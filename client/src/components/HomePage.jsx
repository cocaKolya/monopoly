import { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import styled from 'styled-components';
import { addGame, getGames } from '../redux/actions/gameActions';
import { Button } from './Button';
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
  width: 80%;
  justify-content: space-between;
`;
const Row = styled('div')`
  margin: 10px 200px;
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
  const gameId = '2bmk34bq9xv'
  useEffect(() => {
    dispatch(getGames());
  }, []);

  const GameStarter = (owner) => {
    dispatch(addGame(owner));
    history.push(`/game/${gameId}/lobby`);
  };

  const user = useSelector((state) => state.user);
  const games = useSelector((state) => state.games);
  console.log(games);
  return (
    <>
      <Header>
        <Button text={'Создать игру'} onClick={() => GameStarter(user.id)} />
      </Header>
      <HomeWrapper>
        <Row>
          <Text>Присоединиться к игре</Text>
          <GameList db={fakeGames} />
        </Row>
        <Row>
          <Text>Продолжить игру</Text>
          <GameList db={fakeProcessGames} />
        </Row>
      </HomeWrapper>
    </>
  );
}

export default HomePage;
