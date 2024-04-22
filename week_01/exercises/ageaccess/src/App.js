import './App.css';

function App() {
  let age = 18;
  const ageChecker = <span> { age >= 18 ? 'Je bent oud genoeg om de inhoud van deze website te bekijken.' : 'Sorry, je moet 18 jaar of ouder zijn om de inhoud van deze website te bekijken.' } </span>;
  return (
    <div className="App">
      <header className="App-header">
        { ageChecker }
      </header>
    </div>
  );
}

export default App;
