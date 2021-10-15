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

export const Dice = ({ user }) => {
  const reactDice = useRef(null);
  const params = useParams();
  const dispatch = useDispatch();
  const {
    userPosition,
    setCurrentPosition,
    setUserPosition,
    nextPlayer,
    players,
    setInprocess,
    soundEnabled,
    diceDone,
    setDiceDone,
  } = useDiceContext();

  const diceSocket = useSelector((state) => state.dice);
  const turnSocket = useSelector((state) => state.turn);

  let currentPos = userPosition[turnSocket - 1];

  const [play] = useSound(cubes, {
    soundEnabled,
  });

  useEffect(() => {
    const interval = () => {
      if (turnSocket) {
        setInprocess(true);
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
            setInprocess(false);
            setCurrentPosition(currentPos);
            clearInterval(timerId);
            dispatch(clearDice());
            nextPlayer();
          }
        }, 100);
      }
    };
    if (diceSocket > 0) interval();
  }, [diceSocket]);

  function rollAll() {
    let x = Math.floor(Math.random() * 6 + 1);
    let y = Math.floor(Math.random() * 6 + 1);
    let dicetotal = x + y;

    dispatch(rollDice(dicetotal, params.id, user.id));
    reactDice.current.rollAll([x, y]);
    setDiceDone(true);
  }

  return (
    <DiceWrapper>
      <ReactDice
        numDice={2}
        faceColor={'rgb(70, 63, 65)'}
        dotColor={'white'}
        rollTime={1}
        ref={reactDice}
      />
      {!diceDone ? (
        <Text>
          Player<StyledSpan> {players[turnSocket - 1]?.name}</StyledSpan> Turn
        </Text>
      ) : (
        <Text>
          <StyledSpan> Your</StyledSpan> Turn!
        </Text>
      )}
      {!diceDone && user?.queue === turnSocket ? (
        <Button
          text={'ROLL'}
          onClick={() => {
            rollAll();
            play();
          }}
        />
      ) : (
        <></>
      )}
    </DiceWrapper>
  );
};

const DiceWrapper = styled.div`
  margin-top: 50px;
  margin-right: 10px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

const Text = styled.div`
  color: white;
  padding: 10px;
`;

const StyledSpan = styled.span`
  background-color: red;
  border-radius: 5px;
  padding: 0px 5px;
  font-size: 14pt;
`;
