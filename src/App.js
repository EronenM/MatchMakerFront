import React, { Component } from 'react';
import './App.css';
import Landing from './components/Landing';
import { BrowserRouter as Router } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="appWrapper">
        <header>
         {/* <h1>Mainostila / Cool yläbanneri</h1> */}
        </header>
        <body>
          {/* <h2>Itse sovellus</h2> */}
          </body>
        <Router>
        <Landing/>

        </Router>
      </div>
    );
  }
}

export default App;
