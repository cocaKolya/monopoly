import { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { createSocketOnMessage } from '../utils/socket.message';
import { GamePlayerItem } from './GamePlayersItem';

const GamePlayersList = ({ players }) => {
  return (
    <MainWrapper>
        <p> players in game:</p>
      <PlayersWrapper>
        {players?.map((el) => (
            <GamePlayerItem player={el} />
        ))}
      </PlayersWrapper>
    </MainWrapper>
  );
};
export default GamePlayersList;

const PlayersWrapper = styled.div`
  position: relative;
  display: flex;
  width: 260px;
  border-radius: 10px;
`;

const MainWrapper = styled.div`
  width: 260px;

  border-radius: 10px;
`;

const ItemWrapper =  styled.div`
width: calc(100%/12*4-10px)
`
