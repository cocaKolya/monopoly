import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useDiceContext } from '../contexts/DiceContext';

// npm пакет для звуков где useSound это хук
import useSound from 'use-sound';
import cubes from './sound/cubes.mp3';
import { clearDice, rollDice } from '../redux/actions/diceAction';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';

function RollDice({ user }) {
  const params = useParams();
  const [play] = useSound(cubes);
  const dispatch = useDispatch();
  const { userPosition, setUserPosition, playerTurn, nextPlayer, players } =
    useDiceContext();
  const [dice, setDice] = useState(false);

  let currentPos = userPosition[playerTurn - 1];

  const diceSocket = useSelector((state) => state.dice);
  console.log('=================', diceSocket);

  useEffect(() => {
    const interval = () => {
      let newPosition = diceSocket + userPosition[playerTurn - 1];

      let timerId = setInterval(() => {
        currentPos++;
        if (currentPos > 39) {
          newPosition = newPosition - currentPos;
          currentPos = 0;
          setUserPosition((prev) =>
            prev.map((el, i) => (i === playerTurn - 1 ? 0 : el))
          );
        } else
          setUserPosition((prev) =>
            prev.map((el, i) => (i === playerTurn - 1 ? el + 1 : el))
          );

        if (currentPos === newPosition) {
          clearInterval(timerId);
          dispatch(clearDice());
          nextPlayer();
        }
      }, 100);
    };
    if (diceSocket > 0) interval();
  }, [diceSocket]);

  const rollHandler = () => {
    // setInProgress(true);
    let x = Math.floor(Math.random() * 6 + 1);
    let y = Math.floor(Math.random() * 6 + 1);
    let dicetotal = x + y;
    // setDice(dicetotal);
    dispatch(rollDice(dicetotal, params.id, user.id));
  };

  console.log('im user', user);
  console.log(playerTurn);

  return (
    <>
      {true ? (
        <Button
          onClick={() => {
            rollHandler();
            play();
          }}
        >
          {' '}
          ROLL!
        </Button>
      ) : (
        <Button style={{ backgroundColor: 'pink' }}> ROLL!</Button>
      )}
      <p>
        Ходит игрок: {players[playerTurn]?.name} <br />
        На кубиках выпало: {dice > 0 ? dice : '??'}
      </p>
    </>
  );
}

export default RollDice;

const Button = styled('div')`
  background-color: black;
  cursor: pointer;
  color: white;
  margin: 20px;
`;
