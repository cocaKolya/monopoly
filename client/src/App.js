import styled from 'styled-components';

import CardBoard from './components/CardBoard';
import Player from './components/Player';
import RollDice from './components/RollDice';
import DiceContextProvider from './contexts/DiceContext';
import './style.css';

const MainWrapper = styled('div')`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 1000px;
`;

function App() {
  return (
    <DiceContextProvider>
      <MainWrapper>
        <CardBoard />
        <RollDice />
      </MainWrapper>
    </DiceContextProvider>
  );
}

export default App;
