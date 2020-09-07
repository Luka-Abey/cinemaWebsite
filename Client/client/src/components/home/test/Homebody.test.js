import React from 'react';
import ReactDOM from 'react-dom';
import Homebody from './../Homebody.js'

it("renders without crashing", () => {
    const div = document.createElement("div")
    ReactDOM.render(<Homebody/>, div)
})