import './App.css';
import logo from './logo.svg';

function App() {
  const handleNameChange = () => {
    const names = ['Bob', 'Kevin', 'Dave'];
    const number = Math.floor(Math.random()*3);
    return names[number];
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        Hello {handleNameChange()}!
      </header>
    </div>
  );
}

export default App;
