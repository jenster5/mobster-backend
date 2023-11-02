var express = require("express");
var router = express.Router();

/* GET home page. */
// `GET YOUR_BACKEND_URL/mobs/` # get all mobs
router.get("/", function (req, res, next) {
  console.log("this is a get request");
  res.send("this is a messge to me");
  //res.render("index", { title: "MEEEEEEEE" });
});

// router.get("/mobs", (req, res) => {
//   // Handle GET request for /mobs
// });

// // `POST YOUR_BACKEND_URL/mobs/` # add a new mob
// router.post("/mobs", (req, res) => {
//   console.log("this is a post request");
//   // Handle POST request for /mobs
// });

// `GET YOUR_BACKEND_URL/mobs/:mobId` # get a particular mob
// app.get('/api/v1/tours/:id', (req, res) => {
//   console.log(req.params);
//   //3.1 Now we need to get an id from our JSON file, with all our arrays;
//   //3.2 we need convert our id strings to a numbers , operation above will do that foe us:
//   const id = req.params.id * 1;
//   const tour = tours.find((el) => el.id === id); // this create an element, where comparison is true; we can receive only one single tour;

module.exports = router;
