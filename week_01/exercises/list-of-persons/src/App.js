import './App.css';

function App() {
  const names = ["Alice", "Bob", "Charlie", "David", "Eva"];
  return (
    <div className="App">
      <header className="App-header">
        <h1>List of names</h1>
        <ul>
          {names.map((name, index) => (
            <li key={index}>{name}</li>
          ))}
        </ul>
      </header>
    </div>
  );
}

export default App;
