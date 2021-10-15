import { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import styled from 'styled-components';
import { addGame, getGames, getUserGames } from '../redux/actions/gameActions';
import { Button } from './atoms/Button';
import GameList from './GameList';


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
`;

const Text = styled.p`
  color: white;
  font-size: 20pt;
`;


const StartBtn = styled.button`
  margin: 5px;
  border: 2px solid black;
  padding: 5px 30px;
  font-size: 26pt;
  border-radius: 15px;
  cursor: pointer;
  border: none;
  color: white;
  min-width: 200px;
  height: 90px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  background-color: rgb(161, 83, 172);
  &:focus {
    outline: none;
  }
  &:hover {
    background-color: rgb(177, 126, 184);
  }
`;

function HomePage() {
  
  const dispatch = useDispatch();
  const history = useHistory();

  const localUser = JSON.parse(window.localStorage.getItem('user'));
  const user = useSelector((state) => state.user);
  const games = useSelector((state) => state.games);
  const userGames = useSelector((state) => state.userGames);
  const currentGame = useSelector((state) => state.currentGame);

  useEffect(() => {
    
    dispatch(getGames());
    
    if (localUser) dispatch(getUserGames(localUser?.id));
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
        <StartBtn  onClick={() => GameStarter(user?.id)}> Создать Игру</StartBtn>
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
