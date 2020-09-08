const cors = require("cors");
const express = require("express");
const app = express();
const uuid = require("uuid/v4");

// const stripe = require("stripe")(
//   "sk_test_51HNaldF8DGptuqu5L7hwqu7BvGCgQehCG35XLiElTdWw0Aj6tKSmsAKK4vXjiTEPTslHOUmaiIEZ1PHHXSyTi2AP00GKSOi6x3"
// );

//middleware
app.use(express.json());
app.use(cors());


//routes
app.get("/test", (req, res) => {
    res.send("IT WORKS?!")
})


//listen
app.listen(3000, ()=> console.log("listening at port 3000"))
