import { useSelector } from 'react-redux';
import { useParams } from 'react-router';
import styled from 'styled-components';
import { Button } from './atoms/Button';

const LobbyWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  padding: 40px;
  border: 3px solid black;
  background-color: white;
  width: 50%;
  height: 500px;
  margin: 10px;
  border-radius: 10px;
`;

const GroupDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
`;

export const Lobby = () => {
  const params = useParams();
  const currentGame = useSelector((state) => state.currentGame);
  console.log(currentGame);
  console.log(params);
  return (
    <LobbyWrapper>
      <GroupDiv>
        <p>waiting for other players...</p>
        <Button text={'add Players'}></Button>
      </GroupDiv>
      <div>
        <Button text={'Start Game'} />
      </div>
    </LobbyWrapper>
  );
};
