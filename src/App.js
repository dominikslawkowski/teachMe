import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import { Navigation } from './components/index';
import Home from './components/Home/index';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="container">
            <Navigation />
              <div className="main-container">
                {/* <Route exact path="/" component={Welcome} />
                <Route path="/logowanie" component={Login} />  */
                <Route path="/główna" component={Home} />
                /* <Route path="/profil" component={User} />
                <Route path="/pary" component={Maches} />                */}
              </div>
        </div>
      </Router>
    );
  }
}

export default App;