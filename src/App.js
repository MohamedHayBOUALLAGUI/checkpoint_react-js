import React from 'react';
import './App.css';
import NavBar from './components/NavBar';
import MainContent from './components/MainContent';
import 'bootstrap/dist/css/bootstrap.min.css';



function App() {
  return (
    <div className="App">
      <NavBar/>
      <MainContent/>
    </div>
  );
}

export default App;
