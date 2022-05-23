import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Generate from './pages/generate-report';
import View from './pages/view-report';
import './App.css';
import Report from './pages/report';
import Header from './components/Header';
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

  console.log('inside App.js');
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<View />} />
        <Route path='/generate' element={<Generate />} />
        <Route path='/report/:id' element={<Report />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
// return (
//   <div className='App'>
//     <button onClick={handleclick}>Click to check health</button>
//   </div>
// );
// }
