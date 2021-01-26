import React from 'react';
import './App.css';
import { HashRouter, Route } from 'react-router-dom';
import About from './routes/About.js';
import Home from './routes/Home.js';
import Navigation from './components/Navigation.js';
import Detail from './routes/Detail';

function App() {
  return (
    <HashRouter>
      <Navigation></Navigation>
      <Route path="/" exact={true} component={Home}></Route>
      <Route path="/about" component={About}></Route>
      <Route path="/movie-detail" component={Detail}></Route>
    </HashRouter>
  )
}

export default App;
