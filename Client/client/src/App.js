import React from 'react';
import './App.css';
import Homebody from './components/home/Homebody.js';
import Profilebody from './components/profile/Profilebody.js';
import { BrowserRouter as Router, Route, Switch, Link, Redirect } from 'react-router-dom';
import Contact from './components/contact/Contact.js';
import About from './components/about/About.js';
import GoogleMap from './components/map/Map.js'


function App() {
  return (
    <Router>
        <switch>
        <Route exact path="/" component={Homebody}></Route>
        <Route exact path="/profile/:id" component={Profilebody}></Route>
        <Route exact path="/contact" component={Contact}></Route>
        <Route exact path="/about" component={About}></Route>
        <Route exact path="/map" component={GoogleMap}></Route>
        </switch>
    </Router>
  );
}

export default App;
