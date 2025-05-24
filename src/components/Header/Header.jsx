import React, { useState } from "react";
import "./Header.css";
import logo from "../../assets/images/logo.png";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="header">
      <div className="header-container">
        <img src={logo} alt="Codex Logo" className="logo" />

        <button className="hamburger" onClick={toggleMenu}>
          {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
        </button>

        <nav className={`nav ${isMobileMenuOpen ? "nav-open" : ""}`}>
          <Link to="/" onClick={() => setIsMobileMenuOpen(false)}>Home</Link>
          <Link to="/notes" onClick={() => setIsMobileMenuOpen(false)}>Notes</Link>
          <Link to="/roadmap" onClick={() => setIsMobileMenuOpen(false)}>Roadmap</Link>
          <Link to="/courses" onClick={() => setIsMobileMenuOpen(false)}>Courses</Link>
          <Link to="/dsapractice" onClick={() => setIsMobileMenuOpen(false)}>DSA Practice</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
