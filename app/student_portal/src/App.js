import logo from './logo.svg';
import './App.css';
// Import Services
import { checkHealth } from './service/api';

function App() {
  const handleclick = async () => {
    try {
      const result = await checkHealth();
      console.log(result.data, 'resultresult');
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className='App'>
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className='App-link'
          href='https://reactjs.org'
          target='_blank'
          rel='noopener noreferrer'
        >
          Learn React
        </a>
      </header>
      <button onClick={handleclick}>Click to check health</button>
    </div>
  );
}

export default App;
