import styled from 'styled-components';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { addUser } from '../redux/actions/userAction';

const RegFormForma = styled('form')`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 1000px;
`;

function RegForm() {
  const [formInput, setForm] = useState({});
  const dispatch = useDispatch();
  const history = useHistory();
  const user = useSelector((state) => state.user);

  useEffect(() => {
    if (user) {
      history.push('/home');
    }
  }, [user]);

  const inputChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    console.log(formInput);
  };
  const submitForm = (e) => {
    e.preventDefault();
    dispatch(addUser(formInput));
  };

  return (
    <>
      <RegFormForma onSubmit={(e) => submitForm(e)}>
        name
        <input name='name' value={formInput.name} onChange={inputChange} />
        email
        <input name='email' value={formInput.email} onChange={inputChange} />
        pass
        <input
          name='password'
          value={formInput.password}
          onChange={inputChange}
        />
        <button type='submit'>reg</button>
      </RegFormForma>
      <form action="http://localhost:3001/google" method="get">
      <button type="submit">Google</button>
    </form>
    </>
  );
}
export default RegForm;
