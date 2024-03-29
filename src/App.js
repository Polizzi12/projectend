import './App.css';
import React from 'react';
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar';
import Main from './components/Main';

function App() {
  return (
    <div>
      <NavBar/>
      <Main/>
    </div>
  );
}

export default App;
