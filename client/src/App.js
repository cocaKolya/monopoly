import { useEffect, useRef } from 'react';
import { Route, Switch, useLocation, useHistory } from 'react-router-dom';
import CardBoard from './components/CardBoard';
import styled from 'styled-components';
import DiceContextProvider from './contexts/DiceContext';
import './style.css';
import { useDispatch } from 'react-redux';
import { checkUser } from './redux/actions/userAction';
import RegForm from './components/RegForm';
import HomePage from './components/HomePage';

import { Lobby } from './components/Lobby';
import { NavBar } from './components/NavBar';
import Logout from './components/Logout';
import { AddPlayersModal } from './components/AddPlayersModal';
import { getGames } from './redux/actions/gameActions';
import { createSocketOnMessage } from './utils/socket.message';

function App() {
  const dispatch = useDispatch();
  const url = process.env.REACT_APP_URL_SOCKET;
  const socket = useRef();
  let location = useLocation();
  const localUser = window.localStorage.getItem('user');
  const history = useHistory();
  console.log(location.pathname);
  if (!localUser && location.pathname !== '/reg') history.push('/reg');
  useEffect(() => {
    console.log('App js');
    const socketOnMessage = createSocketOnMessage(dispatch);
    socket.current = new WebSocket(url);
    console.log('>>>>>>>', socket.current);
    socket.current.onmessage = socketOnMessage;
    dispatch(checkUser());
    dispatch(getGames());
  }, []);

  return (
    <DiceContextProvider>
      <NavBar />
      <MainWrapperDiv>
        <AddPlayersModal />
        <Switch>
          <Route exact path="/game/:id" component={CardBoard} />
          <Route exact path="/" component={CardBoard} />
          <Route exact path="/reg" component={RegForm} />
          <Route exact path="/logout" component={Logout} />
          <Route exact path="/home" component={HomePage} />
          <Route exact path="/game/:id/lobby" component={Lobby} />
          <Route exact path="/profile" component={Lobby} />
        </Switch>
      </MainWrapperDiv>
    </DiceContextProvider>
  );
}

export default App;

const MainWrapperDiv = styled('div')`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 1000px;
  width: 100%;
  transform-style: preserve-3d;
  perspective: 900px;
`;
