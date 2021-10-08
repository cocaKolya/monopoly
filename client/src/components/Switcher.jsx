import styled from 'styled-components';
import { useDiceContext } from '../contexts/DiceContext';

const SwitcherDiv = styled('div')`
  display: flex;
  justify-content: center;
  height: 20px;
  width: 40px;
  border: 1px solid white;
  color: white;
  background-color: ${(props) => (props.transform ? 'green' : 'red')};
  -webkit-border-radius: 10px;
  -moz-border-radius: 10px;
  border-radius: 10px;
  cursor: pointer;
`;

function Switcher() {
  const { transform, changeTransform } = useDiceContext();
  return (
    <SwitcherDiv transform={transform} onClick={() => changeTransform()}>
      {transform ? '3D' : '2D'}
    </SwitcherDiv>
  );
}
export default Switcher;
