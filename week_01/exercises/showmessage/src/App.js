import './App.css';

function App() {
  let showMessage = true;
  let message = 'You can view this message.';
  return (
    <div className="App">
      <header className="App-header">
        { showMessage &&
          <p>{message}</p>
        }
      </header>
    </div>
  );
}

export default App;
