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

export default class About extends Component{


    render(){
        return(
            <div>
                <Navbar></Navbar>
                <div class="container-fluid" style={{backgroundColor: "black", color: "white" }}>
                    <div class="row">
                        <div class="col">
                            <center>
                                <h2> About QA Cinema</h2>
                                QA Cinema was built from the ground up by our 4 incredibly
                                talented founders Imran Subhan, Ahmadzeya Naeem, Abeywickrama,
                                Lasantha Abeywickrama, Pashupatiraj Sunuwar. Our team at QA
                                Cinema are committed to providing you with the ultimate
                                film-going experience. There is only <b>ONE</b> QA Cinema Based
                                in Manchester, UK and it never fails to show popular new
                                releases such as Parasite, Tennet, Black Panther and Get Out,
                                operating 4 Screens 24/7. Customer service is key for us so we
                                allow customers to directly message one of our founders with
                                any feedback by completing the form found{" "}
                                <Link to="/contact"><u>here</u></Link>. We are interested in your
                                comments and read every e-mail. We consider all comments to
                                review and improve our levels of service and facilities. We do
                                receive a high volume of e-mails and so cannot guarantee an
                                individual response to all communications.
                            </center><br></br><br></br>
                        </div>
                        </div>
                        <div class="row" style={{color: "white"}}>
                            <div class="col">
                                <center>
                                <h2>Our Screens</h2>
                                </center>
                            </div>
                        </div>
                        <div class="row" style={{color: "white"}}>
                            <div class="col">
                                <center>
                                <h3>Screen 1</h3>
                                Large screen made to accommodate large groups to view new block busters 
                                soon after release. Accommodates 46 people and 4 wheelchair users. Screen size is 60ft by 40 ft
                                <br/>
                                <img src="../media/bigscreen.jpg" alt="screen1" style={{width:"80%"}}/><br/><br/>
                                <img src="../media/bigscreenseating.jpg" alt="screen1 seating" style={{width:"80%"}}/><br/>
                                </center>
                            </div>
                            <div class="col">
                                <center>
                                <h3>Screen 2</h3>
                                Smaller screen perfect for small groups who want a more quite and private experience 
                                with no interruptions. Can accommodate 13 people and 4 wheelchair users. Screen size 30ft by 20ft
                                <img src="../media/smallscreen.jpg" alt="screen2" style={{width:"80%"}}/><br/><br/>
                                <img src="../media/smallscreenseating.jpg" alt="screen2 seating" style={{width:"80%"}}/>
                                </center>
                            </div>
                        </div><br/><br/><br/>
                        <div class="row">
                            <div class="col">
                                <center><h2>Entertainment nearby</h2></center>
                                <br/>
                                <Carousel>
                                    <Carousel.Item>
                                        <img src="../media/attraction1.jpg"
                                            className="d-block w-100"
                                            alt="First slide"
                                        />
                                        <Carousel.Caption>
                                            <h3>Emirates Old Trafford Cricket ground</h3>
                                            <p>Emirates Old Trafford, home of Lancashire Cricket Club is a
                                            world-class sporting venue. With over 150 years of history the
                                            Club is one of the most sought after venues for international
                                            cricket.</p>
                                        </Carousel.Caption>
                                    </Carousel.Item>
                                    <Carousel.Item>
                                        <img
                                            className="d-block w-100"
                                            src="../media/attraction2.jpg"
                                            alt="Second slide"
                                        />

                                        <Carousel.Caption>
                                            <h3>Manchester Art Gallery</h3>
                                            <p>One of the country's finest art collections in spectacular
                                            Victorian and contemporary surroundings. The gallery's £35
                                            million transformation has enabled the collection to be
                                            presented to visitors in imaginative new ways. Highlights
                                            include outstanding pre-Raphaelite paintings, craft and design
                                            and early 20thC British art. Exciting exhibitions programme,
                                            there is a wide range of events, from talks and tours to
                                            hands-on activities for both children and adults.</p>
                                        </Carousel.Caption>
                                    </Carousel.Item>
                                    <Carousel.Item>
                                        <img
                                        className="d-block w-100"
                                        src="../media/attraction3.jpg"
                                        alt="Third slide"
                                        />

                                        <Carousel.Caption>
                                            <h3>Manchester Arena</h3>
                                            <p>Manchester Arena is Europe's largest and most impressive indoor
                                            concert venue with a staggering 1.2 million customers every
                                            year. Voted International Venue of the Year, 2002 and officially
                                            the Busiest Concert Venue in the World in 2004, the Manchester
                                            Arena hosts a wide range of entertainment from rock, pop and
                                            classical music concerts to family shows and world class
                                            sporting events.</p>
                                        </Carousel.Caption>
                                    </Carousel.Item>
                                </Carousel>
                            </div>
                        </div>
                    </div>
                    <Footer></Footer>
            </div>
        )
    }
}