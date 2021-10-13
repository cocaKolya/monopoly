import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const NavBar = () => {
  const user = useSelector((state) => state.user);
  return (
    <NavBarWrapper>
      <LeftWrapper>
        <StyledImg src='/logoSmall.png' />
        <Logo>MONOPOLY</Logo>
      </LeftWrapper>
      <RightWrapper>
        {user && <UserName>{user.name}</UserName>}
        <LinkWrapper>
          {user && <Link to='/profile'>PROFILE</Link>}
          <Link to='/home'>HOME</Link>
          <Link to='/'>GAME</Link>
          {!user && <Link to='/reg'>REG</Link>}
          {user && <Link to='/logout'>LOGOUT</Link>}
        </LinkWrapper>
      </RightWrapper>
    </NavBarWrapper>
  );
};

const NavBarWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: white;
  height: 70px;
  padding: 0px 30px;
`;

const LeftWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled.div`
  margin-left: 10px;
  font-size: 20pt;
  font-weight: bold;
`;

const StyledImg = styled.img`
  width: 50px;
  background-image: src(/logoSmall.png);
`;

const RightWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const LinkWrapper = styled.div`
  display: flex;
  > * {
    text-decoration: none;
    margin-right: 10px;
    padding: 10px 10px;
    background-color: rgb(161, 83, 172);
    color: white;
    &:hover {
      background-color: rgb(177, 126, 184);
    }
  }
`;

const UserName = styled.p`
  margin-right: 20px;
  font-size: 16pt;
  font-weight: bold;
`;
