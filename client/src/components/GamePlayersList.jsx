import styled from 'styled-components';
import { GamePlayerItem } from './GamePlayersItem';

const PlayersWrapper = styled.div`
  display: flex;
  width: 100%;
`;

const GamePlayersList = ({ players }) => {
  console.log('123123123', players);
  return (
    <PlayersWrapper>
      {players?.map((el) => (
        <>
          <GamePlayerItem />
        </>
      ))}
    </PlayersWrapper>
  );
};
export default GamePlayersList;
