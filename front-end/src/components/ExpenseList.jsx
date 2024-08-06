import React, { useEffect, useState } from "react";
import api from "../services/api";

const ExpenseList = () => {
  const [expenses, setExpenses] = useState([]);

  useEffect(() => {
    const fetchExpenses = async () => {
      const userId = localStorage.getItem("userId");
      const response = await api.get(`/expenses/${userId}`);
      setExpenses(response.data);
    };

    fetchExpenses();
  }, []);

  return (
    <div className="expense-list">
      <h2>Expense List</h2>
      <ul>
        {expenses.map((expense) => (
          <li key={expense.id}>
            {expense.category}: ${expense.amount} on{" "}
            {new Date(expense.date).toLocaleDateString()}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ExpenseList;
