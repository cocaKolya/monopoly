import { useSelector } from 'react-redux';
import styled from 'styled-components';

export const CenterUserStats = () => {
  const localUser = JSON.parse(window.localStorage.getItem('user'));

  const gameUsers = useSelector((state) => state.gameUsers);
  const currUser = gameUsers.find((el) => el.id === localUser.id);
  const currentUserCards = useSelector((state) => state.currentUserCards);
  return (
    <Wrapper>
      <p> Игрок: {currUser?.name}</p>
      <p>Ваши деньги: {currUser?.money}</p>
      <p>
        Ваши улицы:{' '}
        {currentUserCards.map((el) => (
          <span>{el.name}; </span>
        ))}
      </p>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  font-size: 14pt;
  flex-direction: column;
  aligh-items: center;
  max-width: 100%;
  padding: 10px;
  margin: 5px;
  height: 100%;
  max-width: 450px;
  word-break: normal;
`;
