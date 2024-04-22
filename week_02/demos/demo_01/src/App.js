import './App.css';
import Counter from './components/Counter';
import DimmedLight from './components/Light/DimmedLight';
import MessagToggle from './components/MessagToggle';
import Switch from './components/Switch';

function App() {
  return (
    <div className="App">
      <Counter />
      <MessagToggle message={'Dit is mijn bericht'} />
      <Switch />
      <DimmedLight />
    </div>
  );
}

export default App;
