import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { useDiceContext } from '../contexts/DiceContext';
import { getCurrentCard } from '../redux/actions/currentCardActions';

export const CenterCard = () => {
  const dispatch = useDispatch();
  const turn = useSelector((state) => state.turn);
  const currentCard = useSelector((state) => state.currentCard);
  const { currentPosition } = useDiceContext();

  useEffect(() => {
    console.log('WORKING', currentPosition);
    dispatch(getCurrentCard(currentPosition));
  }, [currentPosition]);

  const color = 'red';
  const special = 'train';
  return (
    <CardBack key={1} special={currentCard?.card?.special}>
      {currentCard?.card?.color && (
        <CardHead color={currentCard?.card?.color}></CardHead>
      )}
      <CardText
        color={currentCard?.card?.color}
        special={currentCard?.card?.special}
      >
        {currentCard?.card?.name}
      </CardText>
      {currentCard?.card?.cost && (
        <CardText>{currentCard?.card?.cost}k</CardText>
      )}
    </CardBack>
  );
};

const CardBack = styled('div')`
  position: relative;
  box-sizing: content-box;
  flex-shrink: 0;
  width: 120px;
  height: 200px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  border: 1.5px solid black;
  background-color: white;
  background-size: cover;
  ${(props) => props.special && `background-image: url(/${props.special}.png);`}
  ${(props) =>
    props.special === 'train' &&
    'background-size: 50px; background-repeat: no-repeat; background-position-x: center; background-position-y: 90%;'}
`;

const CardHead = styled('div')`
  display: flex;
  justify-content: space-around;
  width: 93%;
  margin-top: 5px;
  height: 40px;
  border: 1px solid black;
  background-color: ${(props) => props.color};
`;

const CardText = styled('div')`
  display: flex;
  padding: 5px;
  font-size: 10pt;
  justify-content: center;
  padding: 10px;
  ${(props) => props.special !== 'train' && !props.color && 'margin-top: 40%'};
`;
