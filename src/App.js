import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import { Navigation, Welcome, Login } from './components/index';
import { Profil } from './components/index';
import Home from './components/Home/index';
import Maches from './components/Matches/index.js';


class App extends Component {
  render() {
    return (
      <Router>
        <div className="container">
            <Navigation />
              <div className="main-container">
              <Route exact path="/" component={Welcome} />
              <Route path="/logowanie" component={Login} />  
              <Route path="/główna" component={Home} />
              <Route path="/profil" component={Profil} />
              <Route path="/pary" component={Maches} />                
              </div>
        </div>
      </Router>
    );
  }
}

export default App;