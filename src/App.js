import React from 'react';
import MainTemplate from './templates/MainTemplate';
import Routes from './routes';

function App() {
  return (
    <div className="App">
      <MainTemplate>
        <Routes />
      </MainTemplate>
    </div>
  );
};

export default App;
