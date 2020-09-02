import React from 'react';
import './App.css';
import Homebody from './Homebody.js';
import Profilebody from './Profilebody.js';
import { BrowserRouter as Router, Route, Switch, Link, Redirect } from 'react-router-dom';


function App() {
  return (
    <Router>
        <switch>
        <Route exact path="/" component={Homebody}></Route>
        <Route exact path="/profile/:id" component={Profilebody}></Route>
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
