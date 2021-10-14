import { createContext, useContext, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

const DiceContext = createContext();

const DiceContextProvider = ({ children }) => {
  const [showAddUsers, setShowAddUsers] = useState(false);
  const [currentKey, setCurrentKey] = useState(false);
  const players = useSelector((state) => state.gameUsers);
  
  const [userPosition, setUserPosition] = useState([]);
  
  const [playerTurn, setPlayerTurn] = useState(0);

  const [transform, setTransform] = useState(false);
  const changeTransform = () => setTransform(!transform);

  useEffect(() => {
    if (!userPosition.length) {
      setUserPosition(players.map((el) => (el = el.position)));
    }
  }, [players]);

  const nextPlayer = () => {
    const playerNum = players.map((el) => el.id);
    if (playerTurn < playerNum.length - 1) {
      setPlayerTurn((prev) => prev + 1);
    } else setPlayerTurn(0);
  };

  return (
    <DiceContext.Provider
      value={{
        userPosition,
        setUserPosition,
        players,
        nextPlayer,
        playerTurn,
        setPlayerTurn,
        transform,
        changeTransform,
        showAddUsers,
        setShowAddUsers,
        currentKey,
        setCurrentKey,
      }}
    >
      {children}
    </DiceContext.Provider>
  );
};

export default DiceContextProvider;

const useDiceContext = () => useContext(DiceContext);
export { useDiceContext };
