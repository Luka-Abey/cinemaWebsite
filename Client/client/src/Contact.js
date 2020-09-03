import 'bootstrap/dist/css/bootstrap.css';
import React,{Component} from 'react';
import './App.css';
import { Link } from 'react-router-dom';
import Navbar from './Navbar.js'
import Footer from './Footer.js'
import nodemailer from 'nodemailer';
import axios from 'axios';

export default class Contact extends Component{


    render(){
        return(
            <div>
                <Navbar></Navbar>
                <Footer></Footer>
            </div>
        )
    }
}