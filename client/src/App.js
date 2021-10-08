import { useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import CardBoard from './components/CardBoard';
import styled from 'styled-components';
import DiceContextProvider from './contexts/DiceContext';
import './style.css';
import { useDispatch } from 'react-redux';
import { checkUser } from './redux/actions/userAction';

const MainWrapperDiv = styled('div')`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 1000px;
`;

function App() {
  const dispatch = useDispatch();


 
  useEffect(() => {
    dispatch(checkUser());
  }, []);

  return (
    // <div>
    //   <button onClick={() => {}}>tap me</button>
    // </div>
    <DiceContextProvider>
      <MainWrapperDiv>
        <Switch>
          <Route exact path="/" component={CardBoard} />
        </Switch>
      </MainWrapperDiv>
    </DiceContextProvider>
  );
}

export default App;
