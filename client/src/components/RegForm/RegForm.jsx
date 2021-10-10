import styled from 'styled-components';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { addUser } from '../../redux/actions/userAction';

const RegFormForma = styled('form')`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
min-height: 1000px;
`;

function RegForm() {
  const [form, setForm] = useState({});
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
    dispatch(addUser(form));
  };

  return (
    <>
      <RegFormForma>
        <p>hi</p>
      </RegFormForma>
    </>
  );
}
export default RegForm;
