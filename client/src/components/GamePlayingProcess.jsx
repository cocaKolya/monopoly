import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { useDiceContext } from '../contexts/DiceContext';
import { getGameUsers } from '../redux/actions/gameUsersActions';
import CardBoard from './CardBoard';
import RollDice from './RollDice';
import Switcher from './Switcher';

export const GamePlayingProcess = () => {
  const localUser = JSON.parse(window.localStorage.getItem('user'));
  const dispatch = useDispatch();
  const params = useParams();
  useEffect(() => {
    dispatch(getGameUsers(params.id));
  }, []);

  const gameUsers = useSelector((state) => state.gameUsers);
  const currUser = gameUsers.find((el) => (el.id === localUser.id));
  console.log('im curr', currUser);
  return (
    <>
      <Switcher />
      <CardBoard />
      <RollDice user={currUser} />
    </>
  );
};
