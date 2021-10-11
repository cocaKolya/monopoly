import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
  border: 2px solid black;
  padding: 5px;
  border-radius: 5px;
  cursor: pointer;
  border: none;
  color: white;
  min-width: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  background-color: rgb(161, 83, 172);
  &:focus {
    outline: none;
  }
  &:hover {
    background-color: rgb(177, 126, 184);
  }
`;

export default StyledButton;

export const Button = ({ text, onClick }) => {
  return <StyledButton onClick={onClick}> {text}</StyledButton>;
};
