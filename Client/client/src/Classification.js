import React from "react";
import "./App.css";
import Navbar from "./Navbar.js";

export default class Classification extends Component {
  render() {
    return (
      <div style={{ backgroundColor: "black", color: "white" }}>
        <table class="table">
          <thead>
            <tr>
              <th>Firstname</th>
              <th>Lastname</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Default</td>
              <td>Defaultson</td>
              <td>def@somemail.com</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}
