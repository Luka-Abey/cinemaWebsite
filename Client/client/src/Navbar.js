import React, { Component } from "react";
import "./App.css";
import { Link } from "react-router-dom";



export default class Navbar extends Component {

    constructor(props) {
        super(props);
        this.state = {
          navbar: false
        };
        this.toggleMenu = this.toggleMenu.bind(this);
      }
    
      toggleMenu(){
        this.setState({ navbar: !this.state.navbar })
      }
    
      render() {
    
      const show = (this.state.navbar) ? "show" : "" ;
    
      return (
    
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <a className="navbar-brand" href="/">Navbar</a>
          <button className="navbar-toggler" type="button" onClick={ this.toggleMenu }>
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className={"collapse navbar-collapse " + show}>
            <div className="navbar-nav mr-auto">
              <a className="nav-item nav-link active" href="/">Home <span class="sr-only">(current)</span></a>
              <a className="nav-item nav-link" href="/">Features</a>
              <a className="nav-item nav-link" href="/">Pricing</a>
              <a className="nav-item nav-link" href="/">logout</a>
            </div>
          </div>
        </nav>
      );
      }
    }