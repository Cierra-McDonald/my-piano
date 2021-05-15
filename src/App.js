import React, { useEffect } from 'react';
import './App.css';
import Test from './components/Presentation/Test.jsx'
import Piano from './components/Containers/Piano'
import AudioPlayer from './components/Containers/AudioPlayer'


function App() {
  // const audioPlayer = AudioPlayer();

  // useEffect(() => { 
  //   audioPlayer.setInstrument('acoustic_grand_piano');
  // }, [audioPlayer]);

  // const handleKeyClick = () => { 
  //   audioPlayer.playNote("C4")
  // }

  return (
    <div className="App">
      <Test/>
      {/* <button>{handleKeyClick} Does this Work?</button> */}
      <Piano/>
    </div>
  );
}

export default App;
