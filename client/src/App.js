import styled from 'styled-components';
import CardBoard from './components/CardBoard';
import RollDice from './components/RollDice';
import DiceContextProvider from './contexts/DiceContext';
import { useEffect, useRef } from 'react';
import './style.css';
import Switcher from './components/Switcher';

const MainWrapper = styled('div')`
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
  // const socket = useRef(new WebSocket(`ws://127.0.0.1:3001`));

  // useEffect(() => {
  //   socket.current.onmessage = function (event) {
  //     alert(`[message] Данные получены с сервера: ${event.data}`);
  //   };
  // }, []);

  return (
    <DiceContextProvider>
      <MainWrapper>
        <Switcher />
        <CardBoard />
        <RollDice />
      </MainWrapper>
    </DiceContextProvider>
  );
}

export default App;
