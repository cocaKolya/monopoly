import styled from 'styled-components';
import { useDiceContext } from '../contexts/DiceContext';

const PLAYER_FACTORS = {
  1: 'top: 40%; left:20%; background-color: yellow;',
  2: 'top: 40%; left:50%; background-color: rgb(212, 16, 58);',
  3: 'top: 65%; left:20%; background-color: rgb(15, 226, 43)',
  4: 'top: 65%; left:50%; background-color: rgb(96, 160, 233);',
};

const PlayerDiv = styled('div')`
  width: 10px;
  height: 10px;
  -webkit-border-radius: 50%;
  -moz-border-radius: 50%;
  border-radius: 50%;
  background-color: black;
  border: 2px solid black;
  position: absolute;
  ${(props) => PLAYER_FACTORS[props.user.id]}
`;

function Player(user) {
  return <PlayerDiv user={user} />;
}

export default Player;
