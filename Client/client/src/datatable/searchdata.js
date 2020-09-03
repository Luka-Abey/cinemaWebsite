import React, { useState, useEffect } from "react";
// import React,{Component, useState, useEffect} from 'react';
import axios from 'axios';
import { TextField } from "@material-ui/core";
import { Autocomplete } from "@material-ui/lab";

require("es6-promise").polyfill();
require("isomorphic-fetch");

export default function Searchbar() {
    // state = {
    //     movies: [],
    //     movieid: ""
    // }
  const [data, setData] = useState([]);
  const [q, setQ] = useState("");

  useEffect(() => {
    fetch("http://localhost:5000/api/movies")
      .then((response) => response.json())
      .then((json) => setData(json));
  }, []);
// componentDidMount() {
//     axios.get(`http://localhost:5000/api/movies`)
//       .then(res => {
//         const movies = res.data;
//         console.log(movies)
//         console.log("TEST")
//         this.setState({ movies });
//       })
//   }

    function search(rows){
    return rows.filter((row) => row.title.toLowerCase().indexOf(q) > -1);
  }

   function handleInputChange(event, value){
    console.log(value);
    this.state.movies.forEach(function (movie){
        console.log(movie._id)})
    // this.state.movies.map(movie	=>
    //     <div class="card" style={{width: "340px", height: "40rem", backgroundColor: "black"}} >
    //         <Link to = {`/profile/${movie._id}`}>
    //         </Link>
    //         <div class="card-body">
    //             <p class="card-text">{movie.title}</p>
    //         </div>
    //     </div>
    // )
  }

  return (
    <Autocomplete
      id="combo-box-demo"
      options={data}
      getOptionLabel={(option) => option.title}
      style={{ width: 300 }}
      onInputChange={handleInputChange}

      renderInput={(params) => (
        <TextField {...params} label="Combo box" variant="outlined" />
      )}
    />
    
  );
}
