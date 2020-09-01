import "bootstrap/dist/css/bootstrap.css";
import React, { Component } from "react";
import "./App.css";

export default class Homebody extends Component {
  constructor() {
    super();
    // this.Addrecord=this.Addrecord.bind(this)
    // this.delete=this.delete.bind(this)

    this.state = {
      records: [
        {
          movieID: 1,
          name: "Harry Potter",
          image: "media/harrypotter.jpg",
        },
        {
          movieID: 2,
          name: "The Avengers",
          image: "media/avengers.jpg",
        },
        {
          movieID: 3,
          name: "Batman",
          image: "media/batman.png",
        },
        {
          movieID: 4,
          name: "Avatar",
          image: "media/avatar.jpg",
        },
        {
          movieID: 4,
          name: "Avatar",
          image: "media/avatar.jpg",
        },
        {
          movieID: 4,
          name: "Avatar",
          image: "media/avatar.jpg",
        },
        {
          movieID: 2,
          name: "The Avengers",
          image: "media/avengers.jpg",
        },
        {
          movieID: 1,
          name: "Harry Potter",
          image: "media/harrypotter.jpg",
        },
      ],
    };
  }

  // delete(r){
  // 	this.setState({
  // 		records: this.state.records.filter(function(data){
  // 			if (data.regno==r){
  // 				return false
  // 			}else{
  // 				return true
  // 			}
  // 		})
  // 	})
  // }
  // Addrecord(){
  // 	this.setState({
  // 		records:this.state.records.concat({
  // 				"regno":121,
  // 				"name":"Pater2",
  // 				"marks":902
  // 			})
  // 	})
  // }
  render() {
    return (
      <div style={{ backgroundColor: "black", color: "white" }}>
        <center>
          <img
            src="/media/wallpaper.jpg"
            style={{ hight: "600px", width: "1360px" }}
            alt="Wallpaper"
          />
        </center>
        <div class="row row-cols-4">
          {this.state.records.map((data) => (
            <div
              class="card"
              style={{
                width: "340px",
                hight: "40rem",
                backgroundColor: "black",
              }}
            >
              <img src={data.image} class="card-img-top" alt={data.name} />
              <div class="card-body">
                <p class="card-text">{data.name}</p>
              </div>
            </div>
          ))}
        </div>
        <div class="row-cols-4">
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
    );
  }
}
