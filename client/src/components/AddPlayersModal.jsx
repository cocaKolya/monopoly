import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import styled from 'styled-components';
import { useDiceContext } from '../contexts/DiceContext';
import { addPendingUsers } from '../redux/actions/PendingUsersActions';
import { Button } from './atoms/Button';
import { PlayerItem } from './PlayerItem';

const Modal = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 400px;
  height: 300px;
  overflow: hidden;
  background-color: white;
  transform: translate(-50%, -50%);
  border-radius: 10px;
  padding: 10px;
`;

const ModalWrapper = styled.div`
  ${({ isOpen }) =>
    isOpen
      ? `
  opacity: 1;
  pointer-events: auto;
`
      : `
        opacity: 0;
  pointer-events: none;
  `}
  transition: 0.4s;
  position: fixed;
  width: 100%;
  height: 100%;
`;

const Overlay = styled.div`
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.6);
`;

const UsersWrapper = styled.div`
  overflow-y: scroll;
  height: 90%;
`;

export const AddPlayersModal = () => {
  const dispatch = useDispatch();
  const [selectedPlayers, setSelectedPlayers] = useState([]);
  const { showAddUsers, setShowAddUsers, currentKey } = useDiceContext();
  const allUsers = useSelector((state) => state.allUsers);
  console.log(selectedPlayers);
  const changeHandler = (id) => {
    setSelectedPlayers((prev) => {
      let prevCopy = [...prev];
      const currId = prevCopy.indexOf(id);
      if (currId >= 0) {
        prevCopy.splice(currId, 1);
      } else {
        prevCopy.push(id);
      }
      return prevCopy;
    });
  };

  const addPlayersHandler = () => {
    dispatch(addPendingUsers(currentKey, showAddUsers));
    setShowAddUsers(false);
  };

  return (
    <ModalWrapper isOpen={showAddUsers}>
      <Overlay onClick={() => setShowAddUsers(false)} />
      <Modal>
        <UsersWrapper>
          <form>
            {allUsers?.map((el) => (
              <PlayerItem player={el} onChange={() => changeHandler(el.id)} />
            ))}
          </form>
        </UsersWrapper>
        <Button
          text='ADD'
          onClick={() => {
            addPlayersHandler();
          }}
        />
      </Modal>
    </ModalWrapper>
  );
};
