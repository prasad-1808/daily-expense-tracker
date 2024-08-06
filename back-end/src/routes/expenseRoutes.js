const express = require("express");
const {
  addExpense,
  getExpenses,
  getSummary,
} = require("../controllers/expenseController");
const authMiddleware = require("../middlewares/authMiddleware");
const router = express.Router();

router.post("/", authMiddleware, addExpense);
router.get("/:userId", authMiddleware, getExpenses);
router.get("/summary/:userId", authMiddleware, getSummary);

module.exports = router;
