const express = require("express");
const { createTrades, getAllTrades, getTradeByID } = require("../controllers/trades");
const router = express.Router();

router.get("/", getAllTrades);
router.get("/:id", getTradeByID);
router.post("/", createTrades);
router.put("/:id", (req, res) => {
  res.status(405).send();
});

router.delete("/:id", (req, res) => {
  res.status(405).send("Method Not Allowed");
});
router.patch("/:id", (req, res) => {
  res.status(405).send("Method Not Allowed");
});

module.exports = router;
