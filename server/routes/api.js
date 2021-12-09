const router = require("express").Router();
const Bet = require("../models/Bet.js");

router.post("/api/bet", ({body}, res) => {
  Bet.create(body)
    .then(dbBet => {
      res.json(dbBet);
    })
    .catch(err => {
      res.status(404).json(err);
    });
});

router.post("/api/bet/bulk", ({body}, res) => {
  Bet.insertMany(body)
    .then(dbBet => {
      res.json(dbBet);
    })
    .catch(err => {
      res.status(404).json(err);
    });
});

router.get("/api/bet", (req, res) => {
  Bet.find({}).sort({date: -1})
    .then(dbBet => {
      res.json(dbBet);
    })
    .catch(err => {
      res.status(404).json(err);
    });
});

module.exports = router;