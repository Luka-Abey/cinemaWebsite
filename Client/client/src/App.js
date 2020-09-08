import React from 'react';
import './App.css';
import Homebody from './Homebody.js';
import Profilebody from './Profilebody.js';
import { BrowserRouter as Router, Route, Switch, Link, Redirect } from 'react-router-dom';
import Contact from './Contact.js';
import CheckoutForm from './CheckoutForm';
import StripeExpress from './StripeExpress'

function App() {
  return (
    
    <Router>
        <switch>
        <Route exact path="/" component={Homebody}></Route>
        <Route exact path="/profile/:id" component={Profilebody}></Route>
        <Route exact path="/contact" component={Contact}></Route>
        {/* <Route exact path="/create-checkout-session"> <CheckoutForm/></Route> */}
        </switch>
    </Router>
    // <StripeExpress/>
  
    // <div className="App">
    //   <Navbar/>
    //   <Homebody/>
    //   <Profilebody/>
    //   <Footer/>

    // </div>
  );
}

export default App;
