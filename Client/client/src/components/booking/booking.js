import 'bootstrap/dist/css/bootstrap.css';
import React,{Component} from 'react';
import { Link } from 'react-router-dom';
import Navbar from './../navbar/Navbar.js'
import Footer from './../footer/Footer.js'
import nodemailer from 'nodemailer';
import axios from 'axios';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Carousel from "react-bootstrap/Carousel";
import GoogleMap from './../map/Map.js'
import Form from "react-bootstrap/Form";
import './../payment/payment.css';
import './booking.css'
import CheckoutForm from "./../payment/CheckoutForm";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

const promise = loadStripe("pk_test_51HNaldF8DGptuqu5JisJ7OAYj3wPAJWUMINx5xgLcSWS081P1pmdN3YyPIAsKTvbgmSDWyXH9VBdQZK52iBIWH8O00xlQivOn0")

export default class booking extends Component{

    state = {
        allScreening: [],
        email: "",
        screenTime: "",
        screenId: "",
        chosenScreening: [],
        chosenSeats: {},
        price: 0,
      }

    componentDidMount() {
        console.log(this.props.match.params.id)
        const title = (this.props.match.params.id);
        axios.get(`http://localhost:5000/api/screenings/${title}`)
        .then(res => {
            const allScreening = res.data;
            this.setState({ allScreening });
        })
    }

    handleChange = (event) => {
        this.setState({ [event.target.name]: event.target.value });
        console.log(this.state)

      };



      postBooking = (event) => {
        event.preventDefault();
        const data = {
            theaterId: "Main-screen",
            filmTitle: this.props.match.params.id,
            name: this.state.email,
            screeningTime: this.state.chosenScreening.screenTime,
            totalPrice : (Object.keys(this.state.chosenSeats).length * 9.99)
       }
       sessionStorage.setItem("price", data.totalPrice)
       console.log(sessionStorage.getItem("price"));
       Object.keys(this.state.chosenSeats).forEach(key => {
           data[key] = this.state.chosenSeats[key];
        })

        const data2 = {}
        Object.keys(this.state.chosenSeats).forEach(key => {
            data2[key] = this.state.chosenSeats[key];
         })
        
        axios.put(`http://localhost:5000/api/screenings/${this.state.chosenScreening[0]._id}`, data2)
        axios.post(`http://localhost:5000/api/bookings`, data)
        .then((res) => {
            console.log(res)
            this.setState({
                email: "",
                chosenSeats: {},

            })
        })
      };

      getSeats = (screenID) => {
        axios.get(`http://localhost:5000/api/screenings/byId/${screenID}`)
        .then(res => {
            const chosenScreening = res.data;
            this.setState({ chosenScreening });
        })
      };

      getChckeboxValue(event) {
          const chosenSeats = this.state.chosenSeats;
          chosenSeats[event.target.name] = event.target.value === "on" ? 1:0;
        this.setState({chosenSeats})
    }

    render(){
        return(
            <div>
                <Navbar></Navbar>
                <div style={{ backgroundColor: "black", color: "white" }}>
                <div
                class="container"
                style={{
                    backgroundColor: "black",
                    color: "white",
                    paddingTop: "80px",
                    paddingBottom: "80px",
                }}
                >
                <div class="row" style={{ paddingLeft: "" }}>
                    <Form onSubmit={this.postBooking}>
                    <Form.Group controlId="exampleForm.ControlInput1">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="name@example.com" name="email" onChange={this.handleChange} value={this.state.email} required />
                    </Form.Group>
                    Select a screen time:
                    <ul>
                    {
                        this.state.allScreening.map(screen	=>
                            <li>
                                {screen.screeningTime} <button class="getSeats" onClick={() => this.getSeats(screen._id)}>Get seats</button>
                            </li>
                        )
                    }
                    </ul>
                    <Form.Group controlId="exampleForm.ControlInput1">
                        
                        {
                        this.state.chosenScreening.length>0 && this.state.chosenScreening[0].seats.map((seat, index1) => {
                                    return(
                                        <div class="plane">
                                            <ol class="cabin fuselage">
                                                <li class="row row--1">
                                                    <ol class="seats" type="A">
                                                        {seat.map((s, index)=> 
                                                            <li class="seat">
                                                                <Form.Check inline label={s} id={`${index1}.${index}`} name={`seats.${index1}.${index}`} onClick={this.getChckeboxValue.bind(this)} />
                                                            </li>
                                                        )}
                                                    </ol>
                                                </li>
                                            </ol>
                                        </div>
                                        )
                            }
                        )
                    }
                    </Form.Group>
                    <button type="submit" class="btn btn-secondary btn-lg">
                        Make Booking
                    </button>
                    </Form>
                    <div class="row" style={{ paddingTop: "500px" }}>
                    <div className="App">
                        <Elements stripe={promise}>
                        <CheckoutForm />
                    </Elements>
                    </div>
            </div>
                </div>
                </div>
                </div>
                <Footer/>
            </div>
        )
    }
}