import { useState, useRef } from "react";

export default function Player() {

  const setPlayerName = useRef()
  const [enterdentName, setEnterdentName] = useState(null)

  function handleClick(){
    setEnterdentName(setPlayerName.current.value)
  }

  return (
    <section id="player">
      <h2>Welcome {enterdentName ?? 'unknown entity'}</h2>
      <p>
        <input type="text" ref={setPlayerName} />
        <button onClick={handleClick}>Set Name</button>
      </p>
    </section>
  );
}
