import styled from 'styled-components';
import { GamePlayerItem } from './GamePlayersItem';

const PlayersWrapper = styled.div`
  display: flex;
  width: 100%;
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
