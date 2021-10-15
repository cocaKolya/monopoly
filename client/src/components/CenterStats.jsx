import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { buyCard } from '../redux/actions/currentCardActions';
import { Button } from './atoms/Button';
import { useParams } from 'react-router';
import { nextTurn } from '../redux/actions/gameActions';

import { useSound } from 'use-sound';
import buySound from './sound/buySound.mp3';
import { useDiceContext } from '../contexts/DiceContext';

export const CenterStats = () => {
  const dispatch = useDispatch();
  const localUser =
    JSON.parse(window.localStorage.getItem('curUser')) ||
    JSON.parse(window.localStorage.getItem('user'));
  const params = useParams();
  const { soundEnabled } = useDiceContext();
  const currCard = useSelector((state) => state.currentCard);
  console.log(currCard);

  const [play] = useSound(buySound, { soundEnabled });
  return (
    <Wrapper>
      {currCard?.card?.cost && currCard?.isFree && (
        <Button
          onClick={() => {
            play();
            dispatch(
              buyCard(currCard?.card?.boardid, localUser?.id, params?.id)
            );
          }}
          text={`Купить за ${currCard?.card?.cost}к`}
        />
      )}
      <Button
        text={'Завершить ход'}
        onClick={() => dispatch(nextTurn(params.id))}
      />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  aligh-items: center;
  width: 100%;
  padding: 10px;
  margin: 5px;
  height: 100%;
  border: 1px solid red;
`;
