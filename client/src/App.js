import { useEffect, useRef } from 'react';
import { Route, Switch, useLocation, useHistory } from 'react-router-dom';
import CardBoard from './components/CardBoard';

import DiceContextProvider from './contexts/DiceContext';
import './style.css';
import { useDispatch, useSelector } from 'react-redux';
import { checkUser } from './redux/actions/userAction';
import RegForm from './components/RegForm';
import HomePage from './components/HomePage';

import { Lobby } from './components/Lobby';
import { NavBar } from './components/NavBar';
import Logout from './components/Logout';
import { AddPlayersModal } from './components/AddPlayersModal';
import { getGames } from './redux/actions/gameActions';
import { createSocketOnMessage } from './utils/socket.message';
import { GamePlayingProcess } from './components/GamePlayingProcess';
import LogIn from './components/LogIn';
import styled from 'styled-components';

function App() {
  const dispatch = useDispatch();
  const url = process.env.REACT_APP_URL_SOCKET;
  const socket = useRef();

  let location = useLocation();
  const localUser = window.localStorage.getItem('user');
  const history = useHistory();

  if (
    !localUser &&
    location.pathname !== '/reg' &&
    location.pathname !== '/login'
  ){history.push('/reg');}

  const user = useSelector((state) => state.user);

  useEffect(() => {
    if (user) {
      socket.current = new WebSocket(url);
      const socketOnMessage = createSocketOnMessage(dispatch);
      socket.current.onmessage = socketOnMessage;
      socket.current.onclose = () => {
        alert('server close ws connection. Try again later');
        history.push('/');
      };
    }
  }, [user]);

  useEffect(() => {
    dispatch(checkUser());
    dispatch(getGames());
  }, []);

  return (
    <DiceContextProvider>
      <NavBar />
      <MainWrapper>
        <AddPlayersModal />
        <Switch>
          <Route exact path='/game/:id' component={GamePlayingProcess} />
          <Route exact path='/' component={HomePage} />
          <Route exact path='/reg' component={RegForm} />
          <Route exact path='/login' component={LogIn} />
          <Route exact path='/logout' component={Logout} />
          <Route exact path='/home' component={HomePage} />
          <Route exact path='/game/:id/lobby' component={Lobby} />
          <Route exact path='/profile' component={Lobby} />
        </Switch>
      </MainWrapper>
    </DiceContextProvider>
  );
}

export default App;

const MainWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  // height: 840px;
`;
