import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { useDiceContext } from '../contexts/DiceContext';
import { CenterCard } from './CenterCard';
import { CenterStats } from './CenterStats';
import { CenterUserStats } from './CenterUserStats';

export const BoardCenter = ({ user }) => {
  const { inProcess } = useDiceContext();
  const localUser = JSON.parse(window.localStorage.getItem('user'));
  const currUserCards = useSelector((state) => state.currentUserCards);
  console.log(currUserCards, '-----------');
  const ususer = currUserCards?.find((el) => el.id === localUser.id);
  console.log('======', ususer);
  const turnSocket = useSelector((state) => state.turn);
  return (
    <Center>
      {!inProcess && (
        <>
          <Row>
            <CenterCard />
            {turnSocket === user?.queue && <CenterStats />}
          </Row>
          <Row>
            <CenterUserStats />
          </Row>
        </>
      )}
    </Center>
  );
};

const Center = styled('div')`
  font-weight: 700;
  ${(props) => props.rotate && '-webkit-transform: rotate(-45deg)'};
  display: flex;
  padding: 20px;
  flex-direction: column;
  // justify-content: center;
  align-items: center;
  font-size: 35pt;
  height: 552px;
  ${(props) =>
    !props.rotate &&
    `background-color: rgb(208, 252, 242);
    border: 1px solid #000;
    position: relative;
    z-index: 5
  `}
`;

const Row = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 50%;
`;
