import React, { useState } from "react";
import api from "../services/api";

const ExpenseForm = () => {
  const [category, setCategory] = useState("");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const userId = localStorage.getItem("userId");
    await api.post("/expenses", { userId, category, amount, date });
    // Clear form fields after submission
    setCategory("");
    setAmount("");
    setDate("");
  };

  return (
    <div className="card p-4">
      <h3 className="card-title mb-4">Add New Expense</h3>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Category:</label>
          <select
            className="form-select"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="">Select Category</option>
            <option value="entertainment">Entertainment</option>
            <option value="investment">Investment</option>
            <option value="shopping">Shopping</option>
            <option value="medical">Medical</option>
            <option value="education">Education</option>
            <option value="loan">Loan</option>
            <option value="other">Other</option>
          </select>
        </div>
        <div className="mb-3">
          <label className="form-label">Amount:</label>
          <input
            type="number"
            className="form-control"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Date:</label>
          <input
            type="date"
            className="form-control"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Add Expense
        </button>
      </form>
    </div>
  );
};

export default ExpenseForm;
