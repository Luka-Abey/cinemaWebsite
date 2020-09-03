import "bootstrap/dist/css/bootstrap.css";
import React, { Component } from "react";
import axios from "axios";
import "./App.css";
import { Link } from "react-router-dom";
import Navbar from "./Navbar.js";
import Footer from "./Footer.js";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

class Comment extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [],
      comments: [],
      name: "",
      body: "",
      email: "",
      commentId: "",
      isInEditMode: false,
      newComment: ""
    };
  }

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };
  componentDidMount() {
    window.scrollTo(0, 0);
    const ID = this.props.match.params.id;
    axios.get(`http://localhost:5000/api/movies/${ID}`).then((res) => {
      const movies = res.data;
      this.setState({ movies });
    });

    axios.get(`http://localhost:5000/api/comments/${ID}`).then((res) => {
      const comments = res.data;
      this.setState({ comments });
    });
  }

  

  componentDidUpdate() {
    const ID = this.props.match.params.id;
    axios.get(`http://localhost:5000/api/comments/${ID}`).then((res) => {
      const comments = res.data;
      this.setState({ comments });
    });
  }

  postComment = (event) => {
    event.preventDefault();
    const ID = this.props.match.params.id;
    axios
      .post(`http://localhost:5000/api/comments`, {
        commentBody: this.state.body,
        name: this.state.name,
        email: this.state.email,
        movieId: ID,
      })
      .then((res) => {
        this.setState({
          name: "",
          body: "",
          email: "",
        });
      });
  };

  deleteComment = (commentId) => {
    console.log(commentId)
    axios.delete(`http://localhost:5000/api/comments/${commentId}`)
  }

  changeEditMode =  () => {
    this.setState({
      isInEditMode: !this.state.isInEditMode
    })
    console.log("Changed mode")
    console.log(this.state.isInEditMode)
  }

  updateComment = () => {
    this.setState({
      isInEditMode: !this.state.isInEditMode,
      newComment: this.refs.newComment.value
    })
    console.log(this.state.newComment)
  }

  renderDefultView = () => {
    return(
        <div>
        <Navbar></Navbar>
        <div
          class="container-fluid"
          style={{
            backgroundColor: "black",
            color: "white",
            paddingTop: "80px",
            paddingBottom: "80px",
          }}
        >
          <div class="row" style={{ paddingLeft: "30px" }}>
            <div class="col-4">
              <img
                src={`../${this.state.movies.image}`}
                style={{ height: "700px", width: "400px" }}
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
                <Form onSubmit={this.postComment}>
                  <legend>Leave a comment</legend>
                  <Form.Group controlId="exampleForm.ControlInput1">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="name@example.com" name="email" onChange={this.handleChange} value={this.state.email} required />
                  </Form.Group>
                  <Form.Group controlId="exampleForm.ControlInput1">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" placeholder="Jhon Smith" name="name" onChange={this.handleChange} placeholder="Name" value={this.state.name} required/>
                  </Form.Group>

                  <Form.Group controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Comment</Form.Label>
                    <Form.Control as="textarea" rows="3" name="body" value={this.state.body} onChange={this.handleChange}/>
                  </Form.Group>
                  <button type="submit" class="btn btn-secondary btn-lg">
                    Post Comment
                  </button>
                </Form>
              </div>
              <div class="col-sm-8">
                <div class="col-sm-14">
                  <div class="list-group">
                    {this.state.comments.reverse().map((comment) => (
                      <div>
                      <a
                        class="list-group-item list-group-item-action active"
                        style={{ marginTop: "10px" }}
                      >
                        <div class="d-flex w-100 justify-content-between">
                          <h5 class="mb-1">{comment.name}</h5>
                          <small>{`${new Date(
                            comment.date
                          ).toLocaleTimeString()} ${new Date(
                            comment.date
                          ).toLocaleDateString()}`}</small>
                        </div>
                        <p class="mb-1" onDoubleClick={this.changeEditMode}>{comment.commentBody}</p>
                        <small>{comment.email}</small>
                      </a>
                        <Button variant="danger" onClick={() => this.deleteComment(comment._id)}>Delete</Button>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer></Footer>
      </div>
    )};

  renderEditView = () => {
    return(
      <div>
      <Navbar></Navbar>
      <div
        class="container-fluid"
        style={{
          backgroundColor: "black",
          color: "white",
          paddingTop: "80px",
          paddingBottom: "80px",
        }}
      >
        <div class="row" style={{ paddingLeft: "30px" }}>
          <div class="col-4">
            <img
              src={`../${this.state.movies.image}`}
              style={{ height: "700px", width: "400px" }}
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
              <Form onSubmit={this.postComment}>
                <legend>Leave a comment</legend>
                <Form.Group controlId="exampleForm.ControlInput1">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control type="email" placeholder="name@example.com" name="email" onChange={this.handleChange} value={this.state.email} required />
                </Form.Group>
                <Form.Group controlId="exampleForm.ControlInput1">
                  <Form.Label>Name</Form.Label>
                  <Form.Control type="text" placeholder="Jhon Smith" name="name" onChange={this.handleChange} placeholder="Name" value={this.state.name} required/>
                </Form.Group>

                <Form.Group controlId="exampleForm.ControlTextarea1">
                  <Form.Label>Comment</Form.Label>
                  <Form.Control as="textarea" rows="3" name="body" value={this.state.body} onChange={this.handleChange}/>
                </Form.Group>
                <button type="submit" class="btn btn-secondary btn-lg">
                  Post Comment
                </button>
              </Form>
            </div>
            <div class="col-sm-8">
              <div class="col-sm-14">
                <div class="list-group">
                  {this.state.comments.reverse().map((comment) => (
                    <div>
                    <a
                      class="list-group-item list-group-item-action active"
                      style={{ marginTop: "10px" }}
                    >
                      <div class="d-flex w-100 justify-content-between">
                        <h5 class="mb-1">{comment.name}</h5>
                        <small>{`${new Date(
                          comment.date
                        ).toLocaleTimeString()} ${new Date(
                          comment.date
                        ).toLocaleDateString()}`}</small>
                      </div>
                      <input type= "text" onDoubleClick={this.changeEditMode} refs="newComment" defaultValue={comment.commentBody}></input> 
                      <button onClick={this.changeEditMode}>Cancel</button>
                      <button onClick={this.updateComment}>Save</button>
                      <br></br>
                      <small>{comment.email}</small>
                    </a>
                      <Button variant="danger" onClick={() => this.deleteComment(comment._id)}>Delete</Button>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  )};

  render() {
    return ( 
      this.state.isInEditMode ?
      this.renderEditView():
      this.renderDefultView()
    );
      
}
}

export default Comment;
