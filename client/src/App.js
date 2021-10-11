import { useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import CardBoard from './components/CardBoard';
import styled from 'styled-components';
import DiceContextProvider from './contexts/DiceContext';
import './style.css';
import { useDispatch } from 'react-redux';
import { checkUser } from './redux/actions/userAction';
import RegForm from './components/RegForm';
import HomePage from './components/HomePage';
import { NavBar } from './components/navBar';
import { Lobby } from './components/Lobby';

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

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(checkUser());
  }, []);

  return (
    <DiceContextProvider>
      <NavBar />
      <MainWrapperDiv>
        <Switch>
          <Route exact path='/' component={CardBoard} />
          <Route exact path='/reg' component={RegForm} />
          <Route exact path='/home' component={HomePage} />
          <Route exact path='/game/:id/lobby' component={Lobby} />
        </Switch>
      </MainWrapperDiv>
    </DiceContextProvider>
  );
}

export default App;
