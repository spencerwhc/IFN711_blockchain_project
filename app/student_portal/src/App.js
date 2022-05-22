import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Generate from './pages/generate-report';
import View from './pages/view-report';
import './App.css';
import Report from './pages/report';
// Import Services
// import { checkHealth } from './service/api';

function App() {
  // const handleclick = async () => {
  //   try {
  //     const result = await checkHealth();
  //     console.log(result.data, 'resultresult');
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };
  return (
    <Router>
      <Routes>
        <Route path='/generate' element={<Generate />} />
        <Route path='/report/:id' element={<Report />} />
        <Route path='/' element={<View />} />
      </Routes>
    </Router>
  );
}

export default App;
// return (
//   <div className='App'>
//     <button onClick={handleclick}>Click to check health</button>
//   </div>
// );
// }
