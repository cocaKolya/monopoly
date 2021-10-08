import { useEffect, useRef } from 'react';

function App() {
  const socket = useRef(new WebSocket(`ws://127.0.0.1:3001`));

  useEffect(() => {
    socket.current.onmessage = function (event) {
      alert(`[message] Данные получены с сервера: ${event.data}`);
    };
  }, []);

  return (
    <div>
      <button onClick={() => {}}>tap me</button>
    </div>
  );
}

export default App;
