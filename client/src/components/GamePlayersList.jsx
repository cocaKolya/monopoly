import styled from 'styled-components';
import { GamePlayerItem } from './GamePlayersItem';

const PlayersWrapper = styled.div`
  position: relative;
  display: flex;
  width: 260px;
  background-color: rgba(168, 168, 168, 0.514);
  border-radius: 10px;
`;

const GamePlayersList = ({ players }) => {
  return (
    <PlayersWrapper>
      {players?.map((el) => (
        <>
          <GamePlayerItem player={el} />
        </>
      ))}
    </PlayersWrapper>
  );
};
export default GamePlayersList;
