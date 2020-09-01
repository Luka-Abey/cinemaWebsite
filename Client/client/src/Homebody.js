import 'bootstrap/dist/css/bootstrap.css';
import React,{Component} from 'react';
import axios from 'axios';
import './App.css';
import {Link} from 'react-router-dom';
import Navbar from './Navbar.js'
import Footer from './Footer.js'


export default class Homebody extends Component{
		
		state = {
			movies: []
		  }

	componentDidMount() {
		axios.get(`http://localhost:5000/api/movies`)
		  .then(res => {
			const movies = res.data;
			console.log(movies)
			console.log("TEST")
			this.setState({ movies });
		  })
	  }

	render(){
		return (
			<div>
            <Navbar></Navbar>
			<div style={{backgroundColor: "black", color: "white"}}>
                <center><img src="/media/wallpaper.jpg" style={{hight: "600px", width: "1360px"}} alt="Wallpaper"/></center>
                <div class="row row-cols-4">
                {
                this.state.movies.map(movie	=>
                    <div class="card" style={{width: "340px", hight: "40rem", backgroundColor: "black"}} >
						<Link to="/profile"> 
                        <img src={movie.image} class="card-img-top" alt={movie.title}/>
						</Link>
                        <div class="card-body">
                            <p class="card-text">{movie.title}</p>
                        </div>
                    </div>
				)
                }
                </div>
				
			</div>
			<Footer></Footer>
			</div>
			
		)

	}
}