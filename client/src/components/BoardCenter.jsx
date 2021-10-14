import styled from 'styled-components';
import { CenterCard } from './CenterCard';

export const BoardCenter = () => {
  return (
    <Center>
      <CenterCard />
    </Center>
  );
};

const Center = styled('div')`
  ${(props) => props.rotate && '-webkit-transform: rotate(-45deg)'};
  display: flex;
  flex-direction: column;
  justify-content: center;
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
