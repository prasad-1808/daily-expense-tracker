import React, { useState } from "react";
import api from "../services/api";

const ExpenseForm = () => {
  const [category, setCategory] = useState("");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const userId = localStorage.getItem("userId");
    try {
      await api.post("/expenses", {
        userId,
        category,
        amount,
        date: new Date(date).toISOString(),
      });
      // Clear form fields after submission
      setCategory("");
      setAmount("");
      setDate("");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Category:</label>
        <select value={category} onChange={(e) => setCategory(e.target.value)}>
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
      <div>
        <label>Amount:</label>
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
      </div>
      <div>
        <label>Date:</label>
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
      </div>
      <button type="submit">Add Expense</button>
    </form>
  );
};

export default ExpenseForm;
