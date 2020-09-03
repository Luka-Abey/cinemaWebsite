import 'bootstrap/dist/css/bootstrap.css';
import React,{Component} from 'react';
import './App.css';
    
export default class Footer extends Component{
    render(){
        return (
            <div class="container-fluid" style={{backgroundColor: "black", color: "white", paddingTop: "80px", paddingBottom: "80px"}}>
                <div class="row">
                    <div class="col">
                    <img src="../media/logo.png" style={{width: "150px", height: "70px"}} alt="QA Cinema"/>
                    </div>
                    <div class="col">
                        Opening times:<br/>
                        Sun-Thur    11am - 8pm<br/>
                        Fri - Sat   11am - 11pm<br/> 
                    </div>
                    <div class="col">
                        Contact Us<br/>
                        Email: Anaeem@QA.com<br/>
                        Phone: 0800 101 4242
                    </div>
                    <div class="col">
                        Social:
                        Twitter: @QA_Cinema
                        Instagram: @QACinemaLondon
                    </div>
                    <div class="col-4">
                    <table class="table">
            <thead>
              <tr style={{color:"white"}}>
                <th>Rating</th>
                <th>Description</th>
              </tr>
            </thead>
            <tbody>
              <tr style={{color:"white"}}>
                <td><img src="https://www.bbfc.co.uk/sites/default/files/styles/40x40/public/certificate/BBFC%20U_RGB.png?itok=fZ7cfPWu" alt="U"/></td>
                <td>Suitable for all</td>
              </tr>
			  <tr style={{color:"white"}}>
                <td><img src="https://www.bbfc.co.uk/sites/default/files/styles/40x40/public/certificate/BBFC%20PG_RGB.png?itok=XxkIcivK" alt="PG"/></td>
                <td>Parental guidance</td>
              </tr>
			  <tr style={{color:"white"}}>
                <td><img src="https://www.bbfc.co.uk/sites/default/files/styles/40x40/public/certificate/BBFC%2012_RGB.png?itok=HeSBv5Eq" alt="12"/></td>
                <td>Suitable for 12 years and over</td>
              </tr>
			  <tr style={{color:"white"}}>
                <td><img src="https://www.bbfc.co.uk/sites/default/files/styles/40x40/public/certificate/BBFC%2015_RGB.png?itok=T_wfBFNq" alt="15"/></td>
                <td>Suitable for 15 years and over</td>
              </tr>
			  <tr style={{color:"white"}}>
                <td><img src="https://www.bbfc.co.uk/sites/default/files/styles/40x40/public/certificate/BBFC%2018_RGB.png?itok=0LQNod9r" alt="18"/></td>
                <td>Suitable for only Adults</td>
              </tr>
            </tbody>
          </table>
                    </div>
                </div>
            </div>
            // <div class="row row-cols-4">
            //     <div class="card" style={{width: "8rem", hight: "8rem", backgroundColor: "black"}} >
            //     <img src={data.image} class="card-img-top" alt={data.name}/>
            //     <div class="card-body">
            //     <p class="card-text">{data.name}</p>
            //     </div>
            // </div>
            // </div>
        )
    }   
}