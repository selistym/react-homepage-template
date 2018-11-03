import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './stylesheets/App.scss';

import Header from './js/components/header'
import Footer from './js/components/footer'

import Home from './js/components/home'
import About from './js/components/about'
import Projects from './js/components/projects'
import Careers from './js/components/careers'
import Contactus from './js/components/contactus'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Header/>
        </header>

        <Router>
          <div>
            <Route exact path='/' component={Home}/>
            <Route path='/about' component={About}/>
            <Route path='/projects' component={Projects}/>
            <Route path='/careers' component={Careers}/>
            <Route path='/contactus' component={Contactus}/>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
