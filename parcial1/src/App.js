import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import Home from './componentes/Home';
import Detalle from './componentes/Detalle';
import Login from './componentes/Login';

function App() {
  return (
    <Login/>
  );
}

export default App;
