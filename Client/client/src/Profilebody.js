import 'bootstrap/dist/css/bootstrap.css';
import React,{Component} from 'react';
import axios from 'axios';
import './App.css';
import {Link} from 'react-router-dom';
import Navbar from './Navbar.js'
import Footer from './Footer.js'

class Comment extends React.Component {
  constructor(){
    super()
  this.state = {
    movies: [],
    comments: []
    }
  }

  componentDidMount() {
    window.scrollTo(0, 0)
    const ID = this.props.match.params.id
    console.log(this.props)
		axios.get(`http://localhost:5000/api/movies/${ID}`)
		  .then(res => {
			const movies = res.data;
			this.setState({ movies });
      })

    	axios.get(`http://localhost:5000/api/comments/${ID}`)
		  .then(res => {
			const comments = res.data;
			this.setState({ comments });
      })
    }
    
    PostComment(state) {
      const comment = document.getElementById('comment').value
      const name = document.getElementById('name').value
      const email = document.getElementById('email').value
      console.log(comment)
      console.log(name)
      console.log(email)
      console.log(this.state.movies)
    }

  render() {
    return (
      <div>
        <Navbar></Navbar>
        <div class="container-fluid" style={{backgroundColor: "black", color: "white", paddingTop: "80px", paddingBottom: "80px",}}>
            <div class="row" style={{ paddingLeft: "30px" }}>
              <div class="col-4">
                <img src={`../${this.state.movies.image}`} style={{ height: "700px", width: "400px" }}
                  alt={this.state.movies.title}
                />
              </div>
              <div class="col-5">
                {this.state.movies.description}
                <br />
              </div>
              <div class="col-3">
                <h2>{this.state.movies.title}</h2>
                <br />
                Age Rating: <br />
                {this.state.movies.ageRating}
                <br />
                <br />
                Actors: <br />
                {this.state.movies.cast}
                <br />
                <br />
                Director: <br />
                {this.state.movies.director}
                <br />
                <br />
                Genre: <br />
                {this.state.movies.genre}
                <br />
                <br />
                Duration: <br />
                {this.state.movies.runningTime} minites
                <br />
                <br />
              </div>
            </div>
        </div>
        <div style={{ backgroundColor: "black", color: "white" }}>
          <center>
            <h1>Ratings & Reviews</h1>
          </center>
          <div class="container">
            <div class="row">
              <div class="col-sm-4">
                    <legend>Leave a comment</legend>
                    <textarea
                      type="text"
                      id = "comment"
                      placeholder="Add to the conversation"
                      required
                    ></textarea>
                    <br />
                    <input type="text" id="name" placeholder="Name (required)" required />
                    <input
                      type="text"
                      id ="email"
                      placeholder="Email (required but never shown)"
                      required
                    />
                    <br />
                  <button
                    type="submit"
                    onClick={this.PostComment}
                    class="btn btn-secondary btn-lg"
                  >
                    Post Comment
                  </button>
              </div>
              <div class="col-sm-8">
                <div class="col-sm-14">
                  <div class="list-group">
                  { this.state.comments.map(comment	=>
                  <a class="list-group-item list-group-item-action active" style = {{marginBottom: "10px"}}>

                  <div class="d-flex w-100 justify-content-between">
                  <h5 class="mb-1">{comment.name}</h5>
                    <small>{comment.date}</small>
                  </div>
                  <p class="mb-1">
                    {comment.commentBody}
                  </p>
                  <small>{comment.email}</small>
                  </a>
                  )
                  }
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer></Footer>
      </div>
    );
  }
}

export default Comment;
