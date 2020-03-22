import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Book from './components/Book';
import Navbar from './components/navbar';
import './App.css';

export class App extends Component {
  render() {
    return (
      <Router>
        <Fragment>
          <Navbar />
          <div className="container">
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/about" component={About} />
              <Route exact path="/book" component={Book} />
            </Switch>
          </div>
        </Fragment>
      </Router>
    );
  }
}

export default App;
