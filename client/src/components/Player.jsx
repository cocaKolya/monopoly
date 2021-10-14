import styled from 'styled-components';


const PLAYER_FACTORS = {
  0: 'top: 40%; left:20%; background-color: yellow;',
  1: 'top: 40%; left:50%; background-color: rgb(212, 16, 58);',
  2: 'top: 65%; left:20%; background-color: rgb(15, 226, 43)',
  3: 'top: 65%; left:50%; background-color: rgb(96, 160, 233);',
};

const PlayerDiv = styled('div')`
  width: 20px;
  height: 20px;
  -webkit-border-radius: 50%;
  -moz-border-radius: 50%;
  border-radius: 50%;
  background-color: black;
  border: 2px solid black;
  position: absolute;
  ${(props) => PLAYER_FACTORS[props.user]}
`;

function Player({id}) {
  return <PlayerDiv user={id} />;
}

export default Player;
