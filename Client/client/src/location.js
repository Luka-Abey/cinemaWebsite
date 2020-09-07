import "bootstrap/dist/css/bootstrap.css";
import React, { Component } from "react";
import "./App.css";
import { Link } from "react-router-dom";
import Navbar from "./Navbar.js";
import Footer from "./Footer.js";

export default class Location extends Component {
  render() {
    return (
      <div>
        <Navbar></Navbar>
        <div
          class="container-fluid"
          style={{
            backgroundColor: "black",
            color: "white",
            paddingTop: "15px",
            justifyContent: "center",
          }}
        >
          <div class="row">
            <div class="col container" style={{ width: "40%" }}>
              <h1
                style={{
                  fontSize: "40px",
                  textAlign: "center",
                  paddingBottom: "40px",
                }}
              >
                <b>
                  {" "}
                  <u>About us</u>{" "}
                </b>
              </h1>
              <h2> About QA Cinema</h2>
              <p
                style={{
                  fontSize: "18px",
                  paddingleft: "50px",
                  marginTop: "30px",
                }}
              >
                QA Cinema was built from the ground up by our 4 incredibly
                talented founders Imran Subhan, Ahmadzeya Naeem, Abeywickrama,
                Lasantha Abeywickrama, Pashupatiraj Sunuwar. Our team at QA
                Cinema are committed to providing you with the ultimate
                film-going experience. There is only <b>ONE</b> QA Cinema Based
                in Manchester, UK and it never fails to show popular new
                releases such as Parasite, Tennet, Black Panther and Get out.
                operating 4 Screens 24/7. Customer service is key for us so we
                allow customers to to directly message one of our founders with
                any feedback by completing the form found{" "}
                <Link to="/contact">
                  <u>here</u>
                </Link>
                . We are interested in your comments and read every e-mail. We
                consider all comments to review and improve our levels of
                service and facilities. We do receive a high volume of e-mails
                and so cannot guarantee an individual response to all
                communications.
              </p>
            </div>
          </div>
          <div class="row">
            <div class="col container">
              <h2 style={{ paddingTop: "20px" }}> About the Attractions</h2>
              <h3 style={{ paddingTop: "10px" }}>
                {" "}
                Emirates Old Trafford Cricket ground{" "}
              </h3>
              <p
                style={{
                  fontSize: "18px",
                  paddingleft: "50px",
                }}
              >
                Emirates Old Trafford, home of Lancashire Cricket Club is a
                world-class sporting venue. With over 150 years of history the
                Club is one of the most sought after venues for international
                cricket
              </p>
              <img
                src="..\media\Cinema-outside.jpg"
                style={{ width: "550px", height: "250px" }}
                alt="Emirates old trafford"
              />
            </div>
          </div>
        </div>
        <Footer></Footer>
      </div>
    );
  }
}
