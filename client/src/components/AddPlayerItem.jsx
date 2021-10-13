import styled from 'styled-components';

const PlayerWrapper = styled.div`
  display: flex;
  border-bottom: 1px solid black;
  // height: 50px;
  font-size: 15pt;
`;

const Name = styled.label`
  margin: 5px;
  display: block;
  padding-left: 24px;
  padding-top: 6px;
  padding-botom: 6px;
  position: relative;
  cursor: pointer;
  // :before {
  //   content: '';
  //   display: block;
  //   position: absolute;
  //   left: 0;
  //   top: 5px;
  //   width: 16px;
  //   height: 16px;
  //   border-radius: 4px;
  //   border: 1px solid #888;
  // }
  // > input:checked + :after {
  //   content: '';
  //   display: block;
  //   position: absolute;
  //   left: 2px;
  //   top: 8px;
  //   width: 12px;
  //   height: 6px;
  //   border-bottom: 2px solid hotpink;
  //   border-left: 2px solid hotpink;
  //   transform: rotate(-45deg);
  // }
`;

const StyledInput = styled.input`
  // position: absolute;
  // clip: rect(0 0 0 0);
  // width: 1px;
  // height: 1px;
  // margin: -1px;
`;

export const AddPlayerItem = ({ player, onChange }) => {
  // console.log(player);
  return (
    <PlayerWrapper>
      <StyledInput
        type='checkbox'
        class='checkbox-control visually-hidden'
        onChange={onChange}
      />
      <Name>{player.name}</Name>
    </PlayerWrapper>
  );
};
