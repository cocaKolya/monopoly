import styled from 'styled-components';
import { useDiceContext } from '../contexts/DiceContext';
import Player from './Player';

function Card({ name, color, isCorner, cardId, special }) {
  const { userPosition, players } = useDiceContext();
  return (
    <>
      <CardBack key={cardId} isCorner={isCorner} special={special}>
        {players?.map(
          (el, i) =>
            userPosition[i] === cardId && (
              <Player key={el.id} id={el.queue} />
            )
        )}
        {color && <CardHead color={color}></CardHead>}
        <CardText color={color} special={special}>
          {name}
        </CardText>
      </CardBack>
    </>
  );
}

export default Card;

const CardBack = styled('div')`
  position: relative;
  box-sizing: content-box;
  flex-shrink: 0;
  width: ${(props) => (props.isCorner ? '99px' : '60px')};
  height: 100px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  border-right: 1.5px solid black;
  background-color: rgb(208, 252, 242);
  background-size: cover;
  ${(props) => props.special && `background-image: url(/${props.special}.png);`}
  ${(props) =>
    props.special === 'train' &&
    'background-size: 50px; background-repeat: no-repeat; background-position-x: center; background-position-y: 90%;'}
`;

const CardHead = styled('div')`
  display: flex;
  justify-content: space-around;
  width: calc(100% + 1px);
  height: 20px;
  border-bottom: 1px solid black;
  background-color: ${(props) => props.color};
`;

const CardText = styled('div')`
  display: flex;
  padding: 5px;
  font-size: 8pt;
  justify-content: center;
  padding: 10px;
  ${(props) => props.special !== 'train' && !props.color && 'margin-top: 40%'};
`;
