import React, { useState, useEffect } from "react";
import { TextField } from "@material-ui/core";
import { Autocomplete } from "@material-ui/lab";
import Button from "@material-ui/core/Button";

require("es6-promise").polyfill();
require("isomorphic-fetch");

export default function Searchbar() {
  const [data, setData] = useState([]);
  const [q, setQ] = useState("");
  const [movieid, setId] = useState("");

  useEffect(() => {
    fetch("http://localhost:5000/api/movies")
      .then((response) => response.json())
      .then((json) => setData(json));
  }, []);

  function search(rows) {
    return rows.filter((row) => row.title.toLowerCase().indexOf(q) > -1);
  }

  function handleInputChange(event, value) {
    // debugger
    console.log(value);
    data
      .filter((movie) => movie.title === value)
      .forEach(function (movie) {
        console.log(movie._id);
        setId(movie._id);
      });
  }
  console.log(data);

  return (
    <div>
      <Autocomplete
        id="combo-box-demo"
        // options={data.map(movie=>movie._id)}
        options={data}
        getOptionLabel={(option) => option.title}
        style={{ width: 300 }}
        onInputChange={handleInputChange}
        renderInput={(params) => (
          <TextField
            {...params}
            label="Search movies"
            variant="standard"
            margin="normal"
          />
        )}
      />
      <Button variant="contained" color="primary" href={`/profile/${movieid}`}>
        Search
      </Button>
    </div>
  );
}
