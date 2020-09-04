import React, { Component } from 'react';
import { Map, GoogleApiWrapper, InfoWindow, Marker  } from 'google-maps-react';
import Navbar from './Navbar.js';
import Footer from './Footer.js';
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Button from "react-bootstrap/Button";
import Popover from "react-bootstrap/Popover";
const mapStyles = {
  width: '95%',
  height: '400px'
};

export class GoogleMap extends Component {

    state = {
        showingInfoWindow: false,  
        activeMarker: {},
        selectedPlace: {} 
      };

    onMarkerClick = (props, marker, e) =>
        this.setState({
        selectedPlace: props,
        activeMarker: marker,
        showingInfoWindow: true
    });

    onClose = props => {
        if (this.state.showingInfoWindow) {
            this.setState({
            showingInfoWindow: false,
            activeMarker: null
            });
        }
    };

    render() {
        const popover = (
            <Popover id="popover-basic">
              <Popover.Title as="h3">Directions</Popover.Title>
              <Popover.Content>
                <ol>
                    <li>Oxford Rd, Manchester M1 6FU</li>
                    <li>Walk north-east towards Station Approach</li>
                    <li>Continue onto Station Approach</li>
                    <li>Turn right onto Whitworth St W/B6469</li>
                    <li>Turn left onto Oxford St/A34</li>
                </ol>
              </Popover.Content>
            </Popover>
          );
          const popover2 = (
            <Popover id="popover-basic">
              <Popover.Title as="h3">Directions</Popover.Title>
              <Popover.Content>
                <ol>
                    <li>Manchester Piccadilly</li>
                    <li>Walk west on Fairfield St/B6469 towards Wyre St</li>
                    <li>Turn right onto Oxford St/A34</li>
                </ol>
              </Popover.Content>
            </Popover>
          );
      return (
          <div style={{backgroundColor: "black", color: "white"}}>
            <Navbar></Navbar>
            <div class="container" style={{paddingTop:"20px"}}>
                <div class="row" style={{paddingBottom: "100px"}}>
                    <div class="col">
                        <img src="../media/external.jpg" alt="External photo of cinema" style={{width:"100%"}}></img>
                    </div>
                    <div class ="col" style={{paddingLeft:"50px", paddingTop:"80px"}}>
                        <h4>Address</h4>
                        QA Cinema <br></br>
                        8 St James's Bldg<br></br>
                        61-95 Oxford St<br></br>
                        Manchester<br></br>
                        M1 6FQ
                    </div>
                </div>
                <div class="row">
                    <div class="col" style={{paddingBottom: "100px"}}>
                        <h4>Parking</h4>
                        Nearest parking at The Palace (Whitworth St, Manchester, M1 6NE) 
                        which is a multi-storey NCP Car Park. The car park has an early bird 
                        discount for arrivals before 9.00am, after 9.00am QA has discounted tickets 
                        for this car park. Please ring the facility for more information.
                    </div>
                    <div class = "col">
                        <h4>Near by public transport</h4>
                        <ul>
                        <li style={{paddingBottom:"10px"}}><OverlayTrigger trigger="click" placement="right" overlay={popover}>
                            <Button variant="info">Oxford Road Train Station</Button>
                        </OverlayTrigger></li>
                        <li><OverlayTrigger trigger="click" placement="right" overlay={popover2}>
                            <Button variant="info">Manchester Piccadilly Station</Button>
                        </OverlayTrigger></li>
                        </ul>
                    </div>
                </div>
                <br></br>
                <div class="row" style={{paddingBottom: "400px"}}>
                    <div class="col" style={{color: "black"}}>
                        <Map google={this.props.google} zoom={14} style={mapStyles} initialCenter={{lat: 53.475559, lng: -2.241149}}>
                            <Marker onClick={this.onMarkerClick} name={'QA Cinema Manchester'}/>
                            <InfoWindow marker={this.state.activeMarker} visible={this.state.showingInfoWindow} onClose={this.onClose}>
                                <div>
                                    <h4>{this.state.selectedPlace.name}</h4>
                                </div>
                            </InfoWindow>
                        </Map>
                    </div>
                </div>
            </div>
            <div>
                <Footer></Footer>
            </div>
        </div>
      );
    }
  }
  
  export default GoogleApiWrapper({
    apiKey: 'AIzaSyAqb5DetGDqnC3o7snOAOooZAai2wIfIBY'
  })(GoogleMap);