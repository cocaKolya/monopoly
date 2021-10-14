import { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { createSocketOnMessage } from '../utils/socket.message';
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
