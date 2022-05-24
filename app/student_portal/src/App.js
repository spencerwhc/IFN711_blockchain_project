import React from 'react';
import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom';

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
      <Routes>
        <Route element={<WithNav />}>
          <Route path='/' element={<View />} />
        </Route>
        <Route element={<WithNav />}>
          <Route path='/generate' element={<Generate />} />
        </Route>
        <Route element={<WithoutNav />}>
          <Route path='/report/:id' element={<Report />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

const WithoutNav = () => <Outlet />;
const WithNav = () => (
  <>
    <Header />
    <Outlet />
  </>
);
// return (
//   <div className='App'>
//     <button onClick={handleclick}>Click to check health</button>
//   </div>
// );
// }
