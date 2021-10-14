import styled from 'styled-components';

export const CenterStats = () => {
  return <Wrapper>stats&actions</Wrapper>;
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
