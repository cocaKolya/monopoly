import styled from 'styled-components';

const PlayerDiv = styled('div')`
  width: 20px;
  height: 20px;
  -webkit-border-radius: 50%;
  -moz-border-radius: 50%;
  border-radius: 50%;
  background-image: url('pngwing.com.png');
  border: 2px solid red;
  position: absolute;
  top: 50%;
`;

function Player() {
  return <PlayerDiv />;
}

export default Player;
