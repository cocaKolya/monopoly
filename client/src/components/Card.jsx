import { useState } from 'react';
import styled from 'styled-components';
import { useDiceContext } from '../contexts/DiceContext';
import Player from './Player';

const CardBack = styled('div')`
  position: relative;
  box-sizing: content-box;
  width: ${(props) => (props.isCorner ? '100px' : '60px')};
  height: 100px;
  margin: 10px 0px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  border: 1.5px solid black;
  margin: -1px;
  background-color: white;
`;
const CardHead = styled('div')`
  display: flex;
  justify-content: space-around;
  width: 100%;
  height: 20px;
  border-bottom: 1px solid black;
  background-color: ${(props) => props.mpColor};
`;

const CardText = styled('div')`
  padding: 5px;
  font-size: 8pt;
`;

function Card({ name, mpColor, isCorner, id }) {
  const { userPosition } = useDiceContext();

  return (
    <>
      <CardBack isCorner={isCorner}>
        {userPosition === id && <Player>🙃</Player>}
        {mpColor && <CardHead mpColor={mpColor}></CardHead>}
        <CardText>{name}</CardText>
      </CardBack>
    </>
  );
}

export default Card;
