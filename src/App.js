import React from 'react';
import './App.css';
import { Switch, Route, Redirect, Link } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Logo from './images/logo.png'
import CharacterDetail from './pages/CharacterDetail';

function App() {
  return (
    <div className="App">
      <img src={Logo} alt='logo' style={{marginLeft: 750, marginTop: 20}} />
      <Link to='/'><h1>Home</h1></Link>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/character/:characterId" component={CharacterDetail} />
        <Redirect to="/" />
      </Switch>
    </div>
  );
}

export default App;
