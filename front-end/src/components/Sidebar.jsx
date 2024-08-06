import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <ul>
        <li>
          <Link to="/dashboard">Dashboard</Link>
        </li>
        <li>
          <Link to="/expenses">Expenses</Link>
        </li>
      </ul>
    </aside>
  );
};

export default Sidebar;
