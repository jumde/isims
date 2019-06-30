import React from 'react';
import logo from './logo.svg';
import './App.css';
import HomePage from './components/HomePage';
import GoToHome from './components/GoToHome';

function App() {
  return (
    <div className="App">
      <div className="App-header">
         <GoToHome/>
      </div>
      <HomePage/>
    </div>
  );
}

export default App;
