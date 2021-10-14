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
  const {
    userPosition,
    setCurrentPosition,
    setUserPosition,
    nextPlayer,
    players,
  } = useDiceContext();

  const diceSocket = useSelector((state) => state.dice);
  const turnSocket = useSelector((state) => state.turn);

  let currentPos = userPosition[turnSocket - 1];

  useEffect(() => {
    const interval = () => {
      let newPosition = diceSocket + userPosition[turnSocket - 1];

      let timerId = setInterval(() => {
        currentPos++;
        if (currentPos > 39) {
          newPosition = newPosition - currentPos;
          currentPos = 0;
          setUserPosition((prev) =>
            prev.map((el, i) => (i === turnSocket - 1 ? 0 : el))
          );
        } else
          setUserPosition((prev) =>
            prev.map((el, i) => (i === turnSocket - 1 ? el + 1 : el))
          );

        if (currentPos === newPosition) {
          console.log('inside it');
          setCurrentPosition(currentPos);
          clearInterval(timerId);
          dispatch(clearDice());
          nextPlayer();
        }
      }, 100);
    };
    if (diceSocket > 0) interval();
  }, [diceSocket]);

  const rollHandler = () => {
    let x = Math.floor(Math.random() * 6 + 1);
    let y = Math.floor(Math.random() * 6 + 1);
    let dicetotal = x + y;

    dispatch(rollDice(dicetotal, params.id, user.id));
  };

  return (
    <>
      {user?.queue === turnSocket ? (
        <Button
          onClick={() => {
            rollHandler();
            play();
          }}
        >
          ROLL!
        </Button>
      ) : (
        <Button style={{ backgroundColor: 'pink' }}>
          {' '}
          PLAYER {players[turnSocket - 1]?.name} TURN
        </Button>
      )}
      <p>
        Ходит игрок: {players[turnSocket - 1]?.name} <br />
        На кубиках выпало: {diceSocket > 0 ? diceSocket : '??'}
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
