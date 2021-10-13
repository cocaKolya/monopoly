import styled from 'styled-components';

const PlayerWrapper = styled.div``;

const Circle = styled.div`
  width: 20px;
  heidht: 20px;
  border-radius: 50%;
`;

export const GamePlayerItem = () => {
  return (
    <PlayerWrapper>
      <Circle />
    </PlayerWrapper>
  );
};
