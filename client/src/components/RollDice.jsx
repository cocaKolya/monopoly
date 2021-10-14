import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useDiceContext } from '../contexts/DiceContext';

// npm пакет для звуков где useSound это хук
import useSound from 'use-sound';
import cubes from './sound/cubes.mp3'

function RollDice() {

// делаем стейт для изменения настроек аудио 
  const [soundEnabled, setSoundEnabled] = useState(true)
// вторым аргументом useSound лежит объект с опциями аудио, для отключения или включения soundEnabled кот. Boolean
  const [play] = useSound(cubes, {
    soundEnabled,
  })
// по нажатию изменяем состояние значения soundEnabled
  const soundOnOffHandler = () => {
    setSoundEnabled(!soundEnabled)
  }
  
  const { userPosition, setUserPosition, playerTurn, nextPlayer, players } =
    useDiceContext();
  const [dice, setDice] = useState(0);
  const [inProgress, setInProgress] = useState(false);
  let currentPos = userPosition[playerTurn];

  useEffect(() => {
    const interval = () => {
      let newPosition = dice + userPosition[playerTurn];
      console.log(
        'dice:',
        dice,
        'userPos:',
        userPosition,
        'newPos',
        newPosition
      );

      let timerId = setInterval(() => {
        console.log('setInt:', inProgress);
        currentPos++;
        if (currentPos > 39) {
          newPosition = newPosition - currentPos;
          currentPos = 0;
          setUserPosition((prev) =>
            prev.map((el, i) => (i === playerTurn ? 0 : el))
          );
        } else
          setUserPosition((prev) =>
            prev.map((el, i) => (i === playerTurn ? el + 1 : el))
          );
        console.log(
          'curPos:',
          currentPos,
          'userPos:',
          userPosition,
          'newPos',
          newPosition
        );
        if (currentPos === newPosition) {
          clearInterval(timerId);
          setInProgress(false);
          setDice(0);
          nextPlayer();
        }
      }, 50);
    };
    if (dice !== 0) interval();
  }, [dice]);

  const rollHandler = () => {
    setInProgress(true);
    let x = Math.floor(Math.random() * 6 + 1);
    let y = Math.floor(Math.random() * 6 + 1);
    let dicetotal = x + y;
    setDice(dicetotal);

    console.log('rollH:', inProgress);
  };

  const Button = styled('div')`
    background-color: black;
    cursor: pointer;
    color: white;
    margin: 20px;
  `;

  return (
    <>
      {!inProgress ? (
        <Button onClick={() => {
          rollHandler()
          play()
        } }> ROLL!</Button>
      ) : (
        <Button style={{ backgroundColor: 'pink' }}> ROLL!</Button>
      )}
      <p>
        Ходит игрок: {players[playerTurn].name} <br />
        На кубиках выпало: {dice > 0 ? dice : '??'}
      </p>
      <Button onClick={soundOnOffHandler}>Stop sound ROLL</Button>
    </>
  );
}

export default RollDice;
