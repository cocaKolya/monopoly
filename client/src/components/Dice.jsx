import { useRef } from 'react';
import ReactDice from 'react-dice-complete';
import 'react-dice-complete/dist/react-dice-complete.css';
import { Button } from './atoms/Button';
import useSound from 'use-sound';
import cubes from './sound/cubes.mp3';
import { clearDice, rollDice } from '../redux/actions/diceAction';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useDiceContext } from '../contexts/DiceContext';

export const Dice = () => {
  const reactDice = useRef(null);
  const user = JSON.parse(window.localStorage.getItem('user'));
  const params = useParams();
  console.log(user);
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

  const [soundEnabled, setSoundEnabled] = useState(true);

  const [play] = useSound(cubes, {
    soundEnabled,
  });

  const soundOnOffHandler = () => {
    setSoundEnabled(!soundEnabled);
  };

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

  // const rollHandler = () => {
  //   let x = Math.floor(Math.random() * 6 + 1);
  //   let y = Math.floor(Math.random() * 6 + 1);
  //   let dicetotal = x + y;

  //   dispatch(rollDice(dicetotal, params.id, user.id));
  // };

  function rollAll() {
    let x = Math.floor(Math.random() * 6 + 1);
    let y = Math.floor(Math.random() * 6 + 1);
    let dicetotal = x + y;

    dispatch(rollDice(dicetotal, params.id, user.id));
    reactDice.current.rollAll([x, y]);
  }

  function rollDoneCallback(num) {
    console.log(`You rolled a ${num}`);
  }

  return (
    <div>
      <ReactDice
        numDice={2}
        rollDone={rollDoneCallback}
        faceColor={'rgb(70, 63, 65)'}
        dotColor={'white'}
        rollTime={1}
        ref={reactDice}
      />
      <Button
        text={'ROLL'}
        onClick={() => {
          rollAll();
          play();
        }}
      />
      <Button text={'Stop sound ROLL'} onClick={soundOnOffHandler} />
    </div>
  );
};
