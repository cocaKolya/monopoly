import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import styled from 'styled-components';
import { getAllUsers } from '../redux/actions/AllUsersActions';
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
  const dispatch = useDispatch();
  const params = useParams();

  const currentGame = useSelector((state) => state.currentGame);
  const user = useSelector((state) => state.user);
  const allUsers = useSelector((state) => state.allUsers);
  console.log(allUsers);

  useEffect(() => {}, []);

  const addUserHandler = () => {
    dispatch(getAllUsers(user.id));
  };
  return (
    <LobbyWrapper>
      <GroupDiv>
        <p>waiting for other players...</p>
        <Button text={'add Players'} onClick={() => addUserHandler()}></Button>
      </GroupDiv>
      <div>
        <Button text={'Start Game'} />
      </div>
    </LobbyWrapper>
  );
};
