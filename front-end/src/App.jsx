import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import "./styles/App.css";

function App() {
  return (
    <Router>
      <div className="App row">
        <div className="col-12 row">
          <div className="">
            <Navbar />
          </div>
          <div className="col-12">
            {/* Main content */}
            <main className="col-md-12 col-lg-12 p-3">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/dashboard" element={<Dashboard />} />
              </Routes>
            </main>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;

// <div className="col-3">
//   {/* Sidebar */}
//   <aside className="col-md-3 col-lg-2 bg-light border-right d-flex flex-column p-3">
//     <Sidebar />
//   </aside>
// </div>
