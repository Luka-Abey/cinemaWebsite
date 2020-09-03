import "bootstrap/dist/css/bootstrap.css";
import React, { Component } from "react";
import "./App.css";
import { Link } from "react-router-dom";
import Navbar from "./Navbar.js";
import Footer from "./Footer.js";

export default class About extends Component {
  render() {
    return (
      <div>
        <Navbar></Navbar>
        <div
          class="container-fluid"
          style={{
            backgroundColor: "black",
            color: "white",
            paddingTop: "80px",
            paddingBottom: "80px",
            justifyContent: "center",
          }}
        >
          <div class="row">
            <div class="col container">
              <h1 style={{ fontSize: "30px", textAlign: "center" }}>
                About us
              </h1>
              <h2> About QA Cinema</h2>
              <p
                style={{
                  fontSize: "18px",
                  backgroundColor: "red",
                  paddingleft: "50px",
                }}
              >
                QA Cinema are committed to providing you with the ultimate
                film-going experience. There is only <b>ONE</b> QA Cinema Based
                in Manchester, UK and it never fails to show popular new
                releases such as Parasite, Tennet, Black Panther and Get out.
                operating 4 Screens 24/7. Customer Services can be contacted by
                completing the form found <Link to="/contact">here</Link>. We
                are interested in your comments and read every e-mail. We
                consider all comments to review and improve our levels of
                service and facilities. We do receive a high volume of e-mails
                and so cannot guarantee an individual response to all
                communications.
              </p>
            </div>
          </div>
          <div class="row">
            <div class="col container">
              <h2> About the Attractions</h2>
              <h3> Emirates Old Trafford Cricket ground </h3>
              <p
                style={{
                  fontSize: "18px",
                  backgroundColor: "red",
                  paddingleft: "50px",
                }}
              >
                Emirates Old Trafford, home of Lancashire Cricket Club is a
                world-class sporting venue. With over 150 years of history the
                Club is one of the most sought after venues for international
                cricket
              </p>
              <img src="..\media\Emirates-old-trafford.jpg" style={{width: "150px", height: "70px"}} alt="QA Cinema"/> 
            </div>
          </div>
        </div>
        <Footer></Footer>
      </div>
    );
  }
}
