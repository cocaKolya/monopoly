import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { buyCard } from '../redux/actions/currentCardActions';
import { Button } from './atoms/Button';
import { useParams } from 'react-router';

export const CenterStats = () => {
  const dispatch = useDispatch();
  const localUser =
    JSON.parse(window.localStorage.getItem('curUser')) ||
    JSON.parse(window.localStorage.getItem('user'));
  const params = useParams();

  const currCard = useSelector((state) => state.currentCard);
  const currentUserCards = useSelector((state) => state.currentUserCards);
  const turnSocket = useSelector((state) => state.turnSocket);
  return (
    <Wrapper>
      {
        currCard?.card?.cost &&
        currCard?.isFree && (
          <Button
            onClick={() =>
              dispatch(
                buyCard(currCard?.card?.boardid, localUser?.id, params?.id)
              )
            }
            text={`Купить за ${currCard?.card?.cost}к`}
          />
        )}
      <Button text={'Завершить ход'} />
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
