import React from "react";
import "./App.css";
import { render } from "react-dom";
import Navbar from './Navbar.js'
import Footer from './Footer.js'
import axios from 'axios';

class Comment extends React.Component {
  state = {
    movies: []
    }

  componentDidMount() {
		axios.get(`http://localhost:5000/api/movies`)
		  .then(res => {
			const movies = res.data;
			this.setState({ movies });
		  })
	  }

  render() {
    return (
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
          {this.state.records.map((data) => (
            <div class="row" style={{ paddingLeft: "30px" }}>
              <div class="col-4">
                <img
                  src={data.image}
                  style={{ hight: "700px", width: "400px" }}
                  alt="Wallpaper"
                />
              </div>
              <div class="col-5">
                {data.description}
                <br />
              </div>
              <div class="col-3">
                <h2>{data.name}</h2>
                <br />
                Releasing on: <br />
                {data.releaseDate}
                <br />
                <br />
                Actors: <br />
                {data.actors}
                <br />
                <br />
                Producer: <br />
                {data.Producer}
                <br />
                <br />
              </div>
            </div>
          ))}
        </div>
        <div style={{ backgroundColor: "black", color: "white" }}>
          <center>
            <h1>Ratings & Reviews</h1>
          </center>
          <div class="container">
            <div class="row">
              <div class="col-sm-4">
                <form action="#" method="post">
                  <fieldset>
                    <legend>Leave a comment</legend>
                    <textarea
                      type="text"
                      placeholder="Add to the conversation"
                      required
                    ></textarea>
                    <br />
                    <input type="text" placeholder="Name (required)" required />
                    <input
                      type="text"
                      placeholder="Email (required but never shown)"
                      required
                    />
                    <br />
                  </fieldset>
                  <button
                    type="submit"
                    value="submit"
                    class="btn btn-secondary btn-lg"
                    id="btSubmit"
                    active
                  >
                    Post Comment
                  </button>
                </form>
              </div>
              <div class="col-sm-8">
                <div class="col-sm-14">
                  <div class="list-group">
                    <a
                      href="#"
                      class="list-group-item list-group-item-action active"
                    >
                      <div class="d-flex w-100 justify-content-between">
                        <h5 class="mb-1">List group item heading</h5>
                        <small>3 days ago</small>
                      </div>
                      <p class="mb-1">
                        Donec id elit non mi porta gravida at eget metus.
                        Maecenas sed diam eget risus varius blandit.
                      </p>
                      <small>Donec id elit non mi porta.</small>
                    </a>
                    <a href="#" class="list-group-item list-group-item-action">
                      <div class="d-flex w-100 justify-content-between">
                        <h5 class="mb-1">List group item heading</h5>
                        <small class="text-muted">3 days ago</small>
                      </div>
                      <p class="mb-1">
                        Donec id elit non mi porta gravida at eget metus.
                        Maecenas sed diam eget risus varius blandit.
                      </p>
                      <small class="text-muted">
                        Donec id elit non mi porta.
                      </small>
                    </a>
                    <a href="#" class="list-group-item list-group-item-action">
                      <div class="d-flex w-100 justify-content-between">
                        <h5 class="mb-1">List group item heading</h5>
                        <small class="text-muted">3 days ago</small>
                      </div>
                      <p class="mb-1">
                        Donec id elit non mi porta gravida at eget metus.
                        Maecenas sed diam eget risus varius blandit.
                      </p>
                      <small class="text-muted">
                        Donec id elit non mi porta.
                      </small>
                    </a>
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
