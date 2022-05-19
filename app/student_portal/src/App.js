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
      <button onClick={handleclick}>Click to check health</button>
    </div>
  );
}

export default App;
