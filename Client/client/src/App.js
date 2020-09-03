import React from 'react';
import './App.css';
import Homebody from './Homebody.js';
import Profilebody from './Profilebody.js';
import Booking from './Booking.js';
import { BrowserRouter as Router, Route, Switch, Link, Redirect } from 'react-router-dom';


function App() {
  return (
    <Router>
        <Switch>
        <Route exact path = "/" component = { Homebody }></Route>
        <Route exact path = "/profile/:id" component = { Profilebody }></Route>
        <Route exact path = "/booking" component = { Booking }></Route>
        </Switch>
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
