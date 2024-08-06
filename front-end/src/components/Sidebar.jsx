import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div
      className="d-flex flex-column bg-light border p-3"
      style={{ width: "250px", minHeight: "100vh" }}
    >
      <h4 className="mb-4">Navigation</h4>
      <ul className="nav flex-column">
        <li className="nav-item mb-2">
          <Link className="nav-link" to="/dashboard">
            Dashboard
          </Link>
        </li>
        <li className="nav-item mb-2">
          <Link className="nav-link" to="/expenses">
            Expenses
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
