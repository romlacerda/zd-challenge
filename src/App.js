import React from 'react';
import MainTemplate from './templates/MainTemplate';
import Home from './pages/Home';
import Products from './pages/Products';

function App() {
  return (
    <div className="App">
      <MainTemplate>
        {/* <Home /> */}
        <Products />
      </MainTemplate>
    </div>
  );
};

export default App;
