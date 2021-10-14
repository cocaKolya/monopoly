import { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { createSocketOnMessage } from '../utils/socket.message';
import { GamePlayerItem } from './GamePlayersItem';

const PlayersWrapper = styled.div`
  display: flex;
  width: 100%;
`;

const GamePlayersList = ({ players }) => {
 
  const gameUsers = useSelector((state) => state.gameUsers);
  return (
    <PlayersWrapper>
      {gameUsers?.map((el) => (
        <>
          <GamePlayerItem player={el} />
        </>
      ))}
    </PlayersWrapper>
  );
};
export default GamePlayersList;
