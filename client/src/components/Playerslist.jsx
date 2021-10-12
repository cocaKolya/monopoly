import styled from 'styled-components';
import { PlayerItem } from './PlayerItem';

const PlayersWrapper = styled.div`
  display: flex;
  width: 100%;
`;

export const PlayersList = ({ players }) => {
  console.log('123123123', players);
  return (
    <PlayersWrapper>
      {players?.map((el) => (
        <>
          <p>1</p>
          <PlayerItem player={el} />
        </>
      ))}
    </PlayersWrapper>
  );
};
