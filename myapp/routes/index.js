var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Bella" });
});
const mobArray = [
  {
    id: 1234,
    name: "Blob",
    members: [
      {
        memID: 4321,
      },
    ],
  },
];
// `GET YOUR_BACKEND_URL/mobs/` # get all mobs
router.get("/mobs", function (req, res) {
  console.log(mobArray);
  res.send(mobArray);
});

// `POST YOUR_BACKEND_URL/mobs/` # add a new mob
router.post("/mobs", function (req, res) {
  const newId = mobArray[mobArray.length - 1].id + 1;
  const newMob = Object.assign({ id: newId }, req.body);
  mobArray.push(newMob);

  //console.log(newMob, "this is a post request to add a mob");
  res.send("this is a new ID");
});

// `GET YOUR_BACKEND_URL/mobs/:mobId` # get a particular mob
router.get("/mobs/:mobId", async function (req, res) {
  const id = req.params.id * 1;
  const mobs = mobArray.find((element) => element.id === id);

  console.log(id, "this is a get request to get a particular mob");
  res.send("this is a messge to me");
});

module.exports = router;
