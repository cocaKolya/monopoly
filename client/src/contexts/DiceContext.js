import { createContext, useContext, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

const DiceContext = createContext();

const DiceContextProvider = ({ children }) => {
  const [showAddUsers, setShowAddUsers] = useState(false);
  const [currentKey, setCurrentKey] = useState(false);
  const players = useSelector((state) => state.gameUsers);

  const [userPosition, setUserPosition] = useState([]);
  const [currentPosition, setCurrentPosition] = useState(null);
  const [playerTurn, setPlayerTurn] = useState(1);
  const [inProcess, setInprocess] = useState(true);

  const [transform, setTransform] = useState(false);
  const changeTransform = () => setTransform(!transform);

  const [soundEnabled, setSoundEnabled] = useState(true);

  const soundOnOffHandler = () => {
    setSoundEnabled(!soundEnabled);
  };

  const [diceDone, setDiceDone] = useState(false);

  const diceDoneChanger = () => {
    setDiceDone(!diceDone);
  };

  useEffect(() => {
    if (!userPosition.length || userPosition.length !== players.length) {
      setUserPosition(players.map((el) => (el = el.position)));
    }
  }, [players]);

  const nextPlayer = () => {
    const playerNum = players.map((el, i) => i + 1);
    if (playerTurn < playerNum.length) {
      setPlayerTurn((prev) => prev + 1);
    } else setPlayerTurn(1);
  };
  console.log('diceDone', diceDone);
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
        currentPosition,
        setCurrentPosition,
        inProcess,
        setInprocess,
        soundEnabled,
        setSoundEnabled,
        soundOnOffHandler,
        diceDone,
        setDiceDone,
      }}
    >
      {children}
    </DiceContext.Provider>
  );
};

export default DiceContextProvider;

const useDiceContext = () => useContext(DiceContext);
export { useDiceContext };
