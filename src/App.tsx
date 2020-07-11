import React from 'react';
import logo from './logo.svg';
import './App.css';
import Register from './components/Register';

function App() {
  return (
    <div className="App">
      <h1>hello</h1>
      <Register password={123} beta={true} person={{ firstName: 'Aman', lastName: 'Bhardwaj' }} />
    </div>
  );
}

export default App;
