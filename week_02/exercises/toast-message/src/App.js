import './App.css';
import Toast from './components/Toast';

function App() {
  return (
    <div className="App">
      <Toast type="success" title="Success" message="The list has been saved." />
      <Toast type="error" title="Error" message="Error message." />
      <Toast type="warning" title="Warning" message="Warning message." />
      <Toast type="info" title="Info" message="Info message." />
    </div>
  );
}

export default App;
