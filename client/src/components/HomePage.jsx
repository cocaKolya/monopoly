import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
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
  margin: 200px;
`;

const Header = styled('div')`
  margn-top: 10px;
`;

function HomePage() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getGames());
  }, []);

  const GameStarter = (owner) => {
    dispatch(addGame(owner));
  };

  const user = useSelector((state) => state.user);
  const games = useSelector((state) => state.games);
  console.log(games);
  return (
    <>
      <Header>
        <Button text={'Создать игру'} onClick={() => GameStarter(user)}/>
      </Header>
      <HomeWrapper>
        <Row>
          <p>Присоединиться к игре</p>
          <GameList db={fakeGames} />
        </Row>
        <Row>
          <p>Продолжить игру</p>
          <GameList db={fakeProcessGames} />
        </Row>
      </HomeWrapper>
    </>
  );
}

export default HomePage;
