import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useDiceContext } from '../contexts/DiceContext';

// npm пакет для звуков где useSound это хук
import useSound from 'use-sound';
import cubes from './sound/cubes.mp3';
import { rollDice } from '../redux/actions/diceAction';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router';

function RollDice({ user }) {
  const params = useParams();
  const [play] = useSound(cubes);
  const dispatch = useDispatch();
  const { userPosition, setUserPosition, playerTurn, nextPlayer, players } =
    useDiceContext();
  const [dice, setDice] = useState(0);
  // const [inProgress, setInProgress] = useState(false);
  let currentPos = userPosition[playerTurn - 1];
  // console.log('+++++>', userPosition);
  // console.log('++========>', players);

  useEffect(() => {
    const interval = () => {
      let newPosition = dice + userPosition[playerTurn - 1];

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
          // setInProgress(false);
          setDice(0);
          nextPlayer();
        }
      }, 100);
    };
    if (dice !== 0) interval();
  }, [dice, players]);

  const rollHandler = () => {
    // setInProgress(true);
    let x = Math.floor(Math.random() * 6 + 1);
    let y = Math.floor(Math.random() * 6 + 1);
    let dicetotal = x + y;
    setDice(dicetotal);
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
