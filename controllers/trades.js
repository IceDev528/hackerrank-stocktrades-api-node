const Trade = require("../models/trades");

// Create a new trade
async function createTrades(req, res) {
  const newTrade = new Trade(req.body);

  try {
    await newTrade.save();
    res.status(201).json(newTrade);
  } catch (error) {
    res.status(500).json({ error: "Failed to create trade" });
  }
}

// Get all trades
async function getAllTrades(req, res) {
  try {
    const trades = await Trade.findAll({ order: [["id", "ASC"]] });
    res.status(200).json(trades);
  } catch (error) {
    res.status(500).json({ error: "Failed to retrieve trades" });
  }
}

// Get a trade by ID
async function getTradeByID(req, res) {
  const { id } = req.params;
  try {
    const trade = await Trade.findByPk(id);
    if (trade) {
      res.status(200).json(trade);
    } else {
      res.status(404).send("ID not found");
    }
  } catch (error) {
    res.status(500).json({ error: "Failed to retrieve trade" });
  }
}

module.exports = {
  createTrades,
  getAllTrades,
  getTradeByID,
};
