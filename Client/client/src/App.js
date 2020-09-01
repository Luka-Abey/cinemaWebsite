import React from 'react';
import './App.css';
import Navbar from './Navbar.js';
import Homebody from './Homebody.js';
import Footer from './Footer.js';
import Profilebody from './Profilebody.js';
import { BrowserRouter as Router, Route, Switch, Link, Redirect } from 'react-router-dom';


function App() {
  return (
    <Router>
        <Route exact path="/" component={Homebody}></Route>
        <Route exact path="/profile" component={Profilebody}></Route>
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
