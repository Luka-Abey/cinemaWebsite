import React from "react";
import "./App.css";
import Navbar from "./Navbar.js";
import Homebody from "./Homebody.js";
import Footer from "./Footer.js";


function App() {
  return (
    <div className="App">
      <Navbar />
      <Homebody />
      {/* <Profilebody/> */}
      <Footer />
    </div>
  );
}

export default App;
