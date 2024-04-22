import './App.css';
import TeamCard from './components/TeamCard';

function App() {
  return (
    <div className="App">
      <TeamCard jobFunction="CEO" firstName="Benoit" lastName="Biraguma"/>
      <TeamCard jobFunction="Teacher" firstName="Evelien" lastName="Rutsaert"/>
    </div>
  );
}

export default App;
