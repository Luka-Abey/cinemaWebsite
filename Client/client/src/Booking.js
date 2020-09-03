import 'bootstrap/dist/css/bootstrap.css';
import React,{Component} from 'react';
import axios from 'axios';
import './App.css';
import Navbar from './Navbar.js'
import Footer from './Footer.js'
import { SeatsioSeatingChart } from '@seatsio/seatsio-react'

export default class Booking extends Component{

    state = {
        movies: [],
        movieid: ""
      }

render(){
    return (
        <div class="full-height">
        <Navbar></Navbar>
        <div style={{backgroundColor: "black", color: "white"}}>
            <div id="chartDiagram">
            <div class="container">
            <div class="row">
                <div class="col">
                {
                <SeatsioSeatingChart
                publicKey="18f2494b-8e5f-43e8-b5ee-341399902eb1"
                event="651bf954-5ec1-4f69-ac3d-3cfc1f854824"
                pricing = {[
                    {
                      'category': 1,
                      'ticketTypes': [
                        {
                            'ticketType': 'child',
                            'label': 'Children',
                            'price': 5
                        },
                        {
                          'ticketType': 'concession',
                          'label': 'Concessions (elderly & students)',
                          'price': 6
                        },
                        {
                          'ticketType': 'adult',
                          'label': 'Adult',
                          'price': 10
                        }
                      ]
                    }
                  ]}
                priceFormatter={price => '£' + price}
            />
            }
                </div>
                <div class="col">
                2 of 2
                </div>
                </div>
                </div>

            </div>
        </div>
       <Footer></Footer>
        </div>
    )

}

}