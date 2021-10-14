import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { useDiceContext } from '../contexts/DiceContext';

export const CenterCard = () => {
  const turn = useSelector((state) => state.turn);
  const allCards = useSelector((state) => state.allCards);
  const { userPosition, players } = useDiceContext();
  console.log('123123123123123', userPosition[turn - 1]);
  // const currCard = allCards.find((el) => el.boardid === userPosition[turn - 1]);
  const color = 'red';
  const special = 'train';
  return (
    <CardBack key={1} special={special}>
      {color && <CardHead color={color}></CardHead>}
      <CardText color={color} special={special}>
        Площадь Маяковского
      </CardText>
    </CardBack>
  );
};

const CardBack = styled('div')`
  position: relative;
  box-sizing: content-box;
  flex-shrink: 0;
  width: 23%;
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
  font-size: 14pt;
  justify-content: center;
  padding: 10px;
  ${(props) => props.special !== 'train' && !props.color && 'margin-top: 40%'};
`;
