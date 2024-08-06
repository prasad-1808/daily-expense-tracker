import React from "react";
import ExpenseForm from "../components/ExpenseForm";
import ExpenseList from "../components/ExpenseList";

const Dashboard = () => {
  return (
    <div className="dashboard">
      <h2>Dashboard</h2>
      <ExpenseForm />
      <ExpenseList />
    </div>
  );
};

export default Dashboard;
