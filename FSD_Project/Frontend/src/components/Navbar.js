import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }
  }, [darkMode]);

  return (
    <nav className="navbar">
      <h2>Job Portal</h2>
      <div>
        <Link to="/">🏠 Home</Link>
        <Link to="/add">➕ Add Job</Link>
        <Link to="/delete">🗑️ Delete Job</Link>
        <Link to="/manage">✏️ Manage Jobs</Link>
        <button 
          onClick={() => setDarkMode(!darkMode)} 
          style={{ marginLeft: "20px", padding: "6px 12px", cursor: "pointer" }}
        >
          {darkMode ? "🌞 Light Mode" : "🌙 Dark Mode"}
        </button>
      </div>
    </nav>
  );
}
