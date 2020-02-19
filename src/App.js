import React from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import './App.scss';

import Intro from './components/intro'
import Skills from './components/skills'
import Contact from './components/contact'
import Nav from './components/nav'
import Portfolio from './components/portfolio';
import Bio from './components/bio';




function App() {
  return (
    <BrowserRouter>
    <div className="App">
        <Nav />
          <Switch>
            <Route exact path="/" component={Intro} />
            <Route path="/skills" component={Skills} />
            <Route path="/contact" component={Contact} />
            <Route path="/portfolio" component={Portfolio} />
            <Route path="/bio" component={Bio} />
          </Switch> 
      </div>
    </BrowserRouter>
  );
}

export default App;
