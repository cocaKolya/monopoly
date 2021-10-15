import styled from 'styled-components';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { loginUser } from '../redux/actions/loginAction';
import Button from './atoms/Button';

function LogIn() {
  const [formInput, setForm] = useState({});
  const dispatch = useDispatch();
  const history = useHistory();
  const user = useSelector((state) => state.user);

  useEffect(() => {
    if (user) {
      history.push('/');
    }
  }, [user]);

  const inputChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  const submitForm = (e) => {
    e.preventDefault();
    dispatch(loginUser(formInput));
  };

  return (
    <SuperMainWrapper>
      <LogoText>Welcome Back to Monopoly!</LogoText>
      <MainWrapper>
        <StyledImg src='/dude.png' atl='dude' />
        <RegWrapper>
          <RegFormForma onSubmit={(e) => submitForm(e)}>
            <Text>e-mail</Text>
            <StyledInput
              type='email'
              name='email'
              value={formInput.email}
              onChange={inputChange}
            />
            <Text>password</Text>
            <StyledInput
              type='password'
              name='password'
              value={formInput.password}
              onChange={inputChange}
            />
            <RegBtn type='submit'>Log in</RegBtn>
          </RegFormForma>
          <form action='http://localhost:3001/google' method='get'>
            <RegBtn text={'google'} type='submit'>
              {' '}
              Log in with Google
            </RegBtn>
          </form>
        </RegWrapper>
      </MainWrapper>
    </SuperMainWrapper>
  );
}
export default LogIn;

const RegWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const RegFormForma = styled('form')`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 10px;
`;

const MainWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledInput = styled.input`
  margin: 5px;
  padding: 10px 20px;
  font-size: 16pt;
  border-radius: 5px;
  border: 1px solid black;
`;

const StyledImg = styled.img`
  width: 300px;
  height: 350px;
`;

const Text = styled.p`
  margin-top: 0px;
  margin-bottom: 0px;
  font-size: 16pt;
`;

const SuperMainWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 800px;
`;

const LogoText = styled.p`
color: white:
font-weight: 700;
font-size: 40pt;
`;

const StyledLabel = styled.label`
  margin-bottom: 10px;
`;

const RegBtn = styled.button`
font-size: 14pt;
  margin: 0px;
  border: 2px solid black;
  padding: 10px 15px;
  border-radius: 5px;
  cursor: pointer;
  border: none;
  color: white;
  min-width: 50px;
  height: 30px;
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

