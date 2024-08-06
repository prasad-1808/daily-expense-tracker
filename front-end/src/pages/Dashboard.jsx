import React from "react";
import ExpenseForm from "../components/ExpenseForm";
import ExpenseList from "../components/ExpenseList";

const Dashboard = () => {
  return (
    <div className="container my-5">
      <h2 className="text-center mb-4">Dashboard</h2>
      <div className="row">
        <div className="col-md-6">
          <div className="card p-4 mb-4 shadow-sm">
            <h3 className="card-title mb-3">Add New Expense</h3>
            <ExpenseForm />
          </div>
        </div>
        <div className="col-md-6">
          <div className="card p-4 mb-4 shadow-sm">
            <h3 className="card-title mb-3">Expense List</h3>
            <ExpenseList />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
