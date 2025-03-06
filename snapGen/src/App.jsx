  //import { useState } from 'react'
  //import reactLogo from './assets/react.svg'
  //import viteLogo from '/vite.svg'
  

  /* import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
  import Home from './pages/Home.jsx';
  import Admin from './pages/Admin.jsx';
  import Login from './pages/Login.jsx'; */
  import './App.css'
  import React from 'react';
  import TestComponent from './components/TestComponents.jsx';

  function App() {

    /* return (
      <Router>
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/login" element={<Login />} />
        </Routes>
      </Router>
    ) */

   //Para probar componentes y rutas

      return (
        <div className="App">
          <h1>CRUD Test</h1>
          <TestComponent />
        </div>
      );
  }

  export default App;


    
  /*{ <>
        <div>
          <a href="https://vite.dev" target="_blank">
            <img src={viteLogo} className="logo" alt="Vite logo" />
          </a>
          <a href="https://react.dev" target="_blank">
            <img src={reactLogo} className="logo react" alt="React logo" />
          </a>
        </div>
        <h1>Vite + React</h1>
        <div className="card">
          <button onClick={() => setCount((count) => count + 1)}>
            count is {count}
          </button>
          <p>
            Edit <code>src/App.jsx</code> and save to test HMR
          </p>
        </div>
        <p className="read-the-docs">
          Click on the Vite and React logos to learn more
        </p>
      </> }*/
