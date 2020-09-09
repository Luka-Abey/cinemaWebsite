import 'bootstrap/dist/css/bootstrap.css';
import React,{Component} from 'react';
import { Link } from 'react-router-dom';
import Navbar from './../navbar/Navbar.js'
import Footer from './../footer/Footer.js'
import nodemailer from 'nodemailer';
import axios from 'axios';
import Form from "react-bootstrap/Form";

export default class Contact extends React.Component {
    constructor(props) {
      super(props);
      this.state = {name: '', email: '', message: '' };
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange = (event) => {
        event.preventDefault();
        this.setState({ [event.target.name]: event.target.value });
      };
    
    handleSubmit (event) {
        event.preventDefault();
        const templateId = 'template_dvd0l3u';
        this.sendFeedback(templateId,{from_name: this.state.name, message: this.state.message, email: this.state.email});
    }

    sendFeedback (templateId, variables) {
        window.emailjs.send(
        'service_41woeob', templateId,
        variables
        ).then(res => {
            console.log('Email successfully sent!')
        })
        .catch(err => console.error(err))
        .then((res) => {
            this.setState({
              name: "",
              message: "",
              email: "",
            });
          });
    }

    render() {
        return (
            <div style={{backgroundColor: "black", color:"white"}}>
                <Navbar></Navbar>
                <div class="container" style={{paddingTop:"50px"}}>
                    <div class="row">
                        <div class="col">
                        <Form>
                            <legend>Write us a message and we will get back to you</legend>
                            <Form.Group controlId="exampleForm.ControlInput1">
                                <Form.Label>Your Email address</Form.Label>
                                <Form.Control type="email" placeholder="name@example.com" name="email" onChange={this.handleChange} value={this.state.email} required />
                            </Form.Group>
                            <Form.Group controlId="exampleForm.ControlInput1">
                                <Form.Label>Your Name</Form.Label>
                                <Form.Control type="text" placeholder="Jhon Smith" name="name" onChange={this.handleChange} placeholder="Name" value={this.state.name} required/>
                            </Form.Group>
                            <Form.Group controlId="exampleForm.ControlTextarea1">
                                <Form.Label>Message</Form.Label>
                                <Form.Control as="textarea" rows="3" name="message" value={this.state.message} onChange={this.handleChange}/>
                            </Form.Group>
                            <button type="submit" class="btn btn-secondary btn-lg" onClick={this.handleSubmit}>
                                Send Message
                            </button>
                        </Form>
                        </div>
                        <div class="col" style={{paddingLeft:"50px"}}>
                            Alternatively you can contact the support team: <br/>
                            Email: Anaeem@QA.com<br/>
                            Phone: 0800 101 4242<br/><br/>
                            Available Mon-Fri   10am - 4pm
                        </div>
                    </div>
                </div>
                <Footer></Footer>
            </div>
        )
      }

}