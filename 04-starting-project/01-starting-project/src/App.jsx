import Player from './components/Player.jsx';
import TimeChallenger from './components/TimeChallenger.jsx';

function App() {
  return (
    <>
      <Player />
      <div id="challenges">
        <TimeChallenger title="EASY" targetTime={1}/>
        <TimeChallenger title="NOT EASY" targetTime={5}/>
        <TimeChallenger title="GETTING TOUGH" targetTime={10}/>
        <TimeChallenger title="PROS ONLY" targetTime={15}/>
      </div>
    </>
  );
}

export default App;
