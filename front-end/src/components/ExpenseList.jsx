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
    <div className="container mt-4">
      <div className="card">
        <div className="card-header">
          <h4 className="mb-0">Expense List</h4>
        </div>
        <ul className="list-group list-group-flush">
          {expenses.length > 0 ? (
            expenses.map((expense) => (
              <li
                key={expense.id}
                className="list-group-item d-flex justify-content-between align-items-center"
              >
                <span>{expense.category}</span>
                <span>
                  ${expense.amount} on{" "}
                  {new Date(expense.date).toLocaleDateString()}
                </span>
              </li>
            ))
          ) : (
            <li className="list-group-item">No expenses recorded.</li>
          )}
        </ul>
      </div>
    </div>
  );
};

export default ExpenseList;
