import { Link } from 'react-router-dom';
import styled from 'styled-components';

const NavBarWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: white;
  height: 50px;
  padding: 0px 30px;
  width: 97%;
`;
const Logo = styled.div`
  font-size: 20pt;
`;
const LinkWrapper = styled.div`
  display: flex;
  > * {
    text-decoration: none;
    margin-right: 10px;
    padding: 10px 10px;
    background-color: rgb(177, 126, 184);
    color: black;
    &:hover {
      background-color: rgb(161, 83, 172);
    }
  }
`;

export const NavBar = () => {
  return (
    <NavBarWrapper>
      <Logo>MONOPOLY</Logo>
      <LinkWrapper>
        <Link to='/home'>HOME</Link>
        <Link to='/'>GAME</Link>
        <Link to='/reg'>REG</Link>
      </LinkWrapper>
    </NavBarWrapper>
  );
};
