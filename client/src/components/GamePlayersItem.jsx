import styled from 'styled-components';

const PlayerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const COLOR_DICTIONARY = {
  1: 'green',
  2: 'red',
  3: 'yellow',
  4: 'blue',
};

const Circle = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: ${({ queue }) => COLOR_DICTIONARY[queue]};
`;

export const GamePlayerItem = ({ player }) => {
  return (
    <PlayerWrapper>
      <Circle queue={player.queue} />
      {player.name}
    </PlayerWrapper>
  );
};
