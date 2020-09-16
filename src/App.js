import React from 'react';
import './App.css';
import Header from './Components/Header'
import Sidebar from './Components/Sidebar'

function App() {
  return (
    <div className="App">
      <Header />

      <div className="app__body">
       <Sidebar />
      </div>
    </div>
  );
}

export default App;
