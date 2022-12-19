import React from 'react';
import AppRouter from './components/AppRouter';
import { BrowserRouter } from 'react-router-dom';
import MyNavbar from './components/MyNavbar';


function App() {
  return (
    <div className="wrapper">
      <BrowserRouter>
        <MyNavbar/>
        <AppRouter/>
      </BrowserRouter>
    </div>
  );
}

export default App;
