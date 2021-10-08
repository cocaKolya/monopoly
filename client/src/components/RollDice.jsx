import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useDiceContext } from '../contexts/DiceContext';

function RollDice() {
  const { userPosition, setUserPosition } = useDiceContext();
  const [dice, setDice] = useState(0);
  const [inProgress, setInProgress] = useState(false);

  useEffect(() => {
    const interval = () => {
      let newPosition = dice + userPosition;
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
          setUserPosition(0);
        } else setUserPosition((prev) => prev + 1);
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
        }
      }, 50);
    };
    if (dice !== 0) interval();
  }, [dice]);

  let currentPos = userPosition;

  const rollHandler = () => {
    setInProgress(true);
    let x = Math.floor(Math.random() * 6 + 1);
    let y = Math.floor(Math.random() * 6 + 1);
    let dicetotal = x + y;
    setDice(dicetotal);

    console.log('rollH:', inProgress);
    // console.log(dicetotal);
    // console.log('dice:', dice, 'userPos:', userPosition);
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
        <Button onClick={rollHandler}> ROLL!</Button>
      ) : (
        <Button style={{ backgroundColor: 'pink' }}> ROLL!</Button>
      )}
      {dice}
    </>
  );
}

export default RollDice;
