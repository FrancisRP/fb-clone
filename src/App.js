import React from 'react';
import './App.css';
import Header from './Components/Header'
import Sidebar from './Components/Sidebar'
import Feed from './Components/Feed'

function App() {
  return (
    <div className="App">
      <Header />

      <div className="app__body">
       <Sidebar />
       <Feed />
      </div>
    </div>
  );
}

export default App;
