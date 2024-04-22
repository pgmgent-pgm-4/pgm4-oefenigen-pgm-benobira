import './App.css';
import Colors from './components/Colors';
import Counter from './components/Counter';
import DimmedLight from './components/Light/DimmedLight';
import MessagToggle from './components/MessagToggle';
import Switch from './components/Switch';
import Username from './components/Username';

function App() {
  return (
    <div className="App">
      <Counter />
      <MessagToggle message={'Dit is mijn bericht'} />
      <Switch />
      <DimmedLight />
      <Username />
      <Colors />
    </div>
  );
}

export default App;
