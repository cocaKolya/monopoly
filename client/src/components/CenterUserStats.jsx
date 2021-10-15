import { useSelector } from 'react-redux';
import styled from 'styled-components';

export const CenterUserStats = () => {
  const localUser = JSON.parse(window.localStorage.getItem('user'));
  const currentUserCards = useSelector((state) => state.currentUserCards);
  console.log(currentUserCards);
  return (
    <Wrapper>
      <p> Игрок: {localUser.name}</p>
      <p>Ваши деньги: {currentUserCards?.gameusers?.money}</p>
      <p>Ваши улицы: ""null""</p>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  font-size: 14pt;
  flex-direction: column;
  aligh-items: center;
  width: 100%;
  padding: 10px;
  margin: 5px;
  height: 100%;
  border: 1px solid red;
`;
