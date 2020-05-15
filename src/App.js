import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import Navibar from "./components/Header/Navibar";
import Home from './components/Home/Home';
// import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
          <Navibar />
          <Route path="/" component={Home} />
        </header>
      </div>
    </BrowserRouter>
  );
}

export default App;
