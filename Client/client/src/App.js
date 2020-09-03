import React from 'react';
import './App.css';
import Homebody from './Homebody.js';
import Profilebody from './Profilebody.js';
import { BrowserRouter as Router, Route, Switch, Link, Redirect } from 'react-router-dom';
import Contact from './Contact.js';
import About from './About.js'


function App() {
  return (
    <Router>
        <switch>
        <Route exact path="/" component={Homebody}></Route>
        <Route exact path="/profile/:id" component={Profilebody}></Route>
        <Route exact path="/contact" component={Contact}></Route>
        <Route exact path="/about" component={About}></Route>
        </switch>
    </Router>
    // <div className="App">
    //   <Navbar/>
    //   <Homebody/>
    //   <Profilebody/>
    //   <Footer/>

    // </div>
  );
}

export default App;
