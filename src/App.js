import './App.css';
import Piano from './components/Containers/Piano'


function App() {
 
  return (
    <div className="App">
      <h1> 🎶  My Little Piano  🎶 </h1>
      <Piano/>
      <br/>
      <br/>
      <h3><b>Instructions</b>: Press down on you keyboard to play!  Valid keys to use include: z, s, x, d, c, v, g, b, h, n, j, m and l</h3>
    </div>
  );
}

export default App;
