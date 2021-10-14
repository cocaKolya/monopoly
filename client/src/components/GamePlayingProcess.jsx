import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { useDiceContext } from '../contexts/DiceContext';
import { getGameUsers } from '../redux/actions/gameUsersActions';
import CardBoard from './CardBoard';
import RollDice from './RollDice';
import Switcher from './Switcher';
import styled from 'styled-components';
import { Dice } from './Dice';

export const GamePlayingProcess = () => {
  const localUser = JSON.parse(window.localStorage.getItem('user'));
  const dispatch = useDispatch();
  const params = useParams();
  useEffect(() => {
    dispatch(getGameUsers(params.id));
  }, []);

  const gameUsers = useSelector((state) => state.gameUsers);
  const currUser = gameUsers.find((el) => el.id === localUser.id);

  console.log('localuser------', localUser);
  console.log('123123------', gameUsers);
  console.log('1qqqqqqq------', currUser);

  return (
    <MainWrapperDiv>
      <Col>
        <Dice user={currUser} />
      </Col>
      <Center>
        <Wrapper3d>
          <Switcher />
          <CardBoard />
        </Wrapper3d>
      </Center>
      <Col>asasd</Col>
    </MainWrapperDiv>
  );
};

const MainWrapperDiv = styled('div')`
  display: flex;
  width: 95%;
`;

const Wrapper3d = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  transform-style: preserve-3d;
  perspective: 900px;
`;

const Center = styled.div`
  flex-grow: 1;
`;

const Col = styled.div`
  width: 29%;
  border: 1px solid black;
`;
