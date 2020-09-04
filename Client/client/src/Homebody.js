import 'bootstrap/dist/css/bootstrap.css';
import React,{Component} from 'react';
import axios from 'axios';
import './App.css';
import {Link} from 'react-router-dom';
import Navbar from './Navbar.js'
import Footer from './Footer.js'


export default class Homebody extends Component{
		
		state = {
			movies: [],
			movieid: ""
		  }

	componentDidMount() {
		axios.get(`http://localhost:5000/api/movies`)
		  .then(res => {
			const movies = res.data;
			this.setState({ movies });
		  })
	  }

	render(){
		return (
			<div>
            <Navbar></Navbar>
			<div style={{backgroundColor: "black", color: "white"}}>
				<img src="/media/wallpaper.jpg" style={{height: "600px", width: "100%"}} alt="Wallpaper"/>
                <div class="row row-cols-4" style={{width: "100%"}}>
                {
				this.state.movies.map(movie	=>
					
                    <div class="card" style={{width: "340px", height: "40rem", backgroundColor: "black"}} >
						<Link to = {`/profile/${movie._id}`}>
                        <img src={movie.image} class="card-img-top" alt={movie.title} style={{width:"100%"}}/>
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