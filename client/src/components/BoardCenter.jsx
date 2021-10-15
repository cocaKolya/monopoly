import styled from 'styled-components';
import { CenterCard } from './CenterCard';
import { CenterStats } from './CenterStats';
import { CenterUserStats } from './CenterUserStats';

export const BoardCenter = () => {
  return (
    <Center>
      <Row>
        <CenterCard />
        <CenterStats />
      </Row>
      <Row>
        <CenterUserStats />
      </Row>
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
