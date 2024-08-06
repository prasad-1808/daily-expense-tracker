const prisma = require("../utils/db");

const addExpense = async (req, res) => {
  const { userId, category, amount, date } = req.body;

  try {
    const expense = await prisma.expense.create({
      data: {
        userId,
        category,
        amount,
        date,
      },
    });

    res.status(201).json(expense);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const getExpenses = async (req, res) => {
  const { userId } = parseInt(req.params);

  try {
    const expenses = await prisma.expense.findMany({
      where: { userId },
    });

    res.json(expenses);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const getSummary = async (req, res) => {
  const { userId } = req.params;
  const { period } = req.query; // 'week' or 'month'

  const startDate = new Date();
  if (period === "week") {
    startDate.setDate(startDate.getDate() - 7);
  } else if (period === "month") {
    startDate.setMonth(startDate.getMonth() - 1);
  }

  try {
    const expenses = await prisma.expense.findMany({
      where: {
        userId,
        date: {
          gte: startDate,
        },
      },
    });

    const total = expenses.reduce((sum, expense) => sum + expense.amount, 0);

    res.json({ total });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = { addExpense, getExpenses, getSummary };
