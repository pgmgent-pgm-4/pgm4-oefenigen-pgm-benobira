import { Button } from 'flowbite-react';
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
      <h1 className="text-3xl font-bold underline">
      Hello world!
      </h1>
      <Counter />
      <MessagToggle message={'Dit is mijn bericht'} />
      <Switch />
      <DimmedLight />
      <Username />
      <Colors />
      <div className="flex flex-wrap gap-2">
      <Button>Default</Button>
      <Button color="blue">Blue</Button>
      <Button color="gray">Gray</Button>
      <Button color="dark">Dark</Button>
    </div>
    </div>
  );
}

export default App;
