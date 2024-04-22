import './App.css';
import Person from './components/Person';

function App() {
  const bmi = (weight, height) => {
    return Math.round(weight / (height * height));
  }
  return (
    <div className="App">
      <header className="App-header">
        <Person 
          firstName="Benoît"
          lastName="Biraguma"
          pictureUrl="https://picsum.photos/id/237/200/300"
          age="23"
          height="1m76"
          weight="82kg"
          bmi={bmi(82, 1.76)}
        />
      </header>
    </div>
  );
}

export default App;
