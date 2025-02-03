import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  return (
    <header>
      <div className="navbar-container">
        {/* Logo */}
        <NavLink to="/" className="logo" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
          Honor Hive
        </NavLink>
        {/* Desktop Navigation */}
        <nav className="desktop-nav">
          <ul>
            <li>
              <NavLink to="/about" className={({ isActive }) => (isActive ? "active" : "")}>
                About
              </NavLink>
            </li>
            <li>
              <NavLink to="/services" className={({ isActive }) => (isActive ? "active" : "")}>
                Services
              </NavLink>
            </li>
            <li>
              <NavLink to="/testimonials" className={({ isActive }) => (isActive ? "active" : "")}>
                Testimonials
              </NavLink>
            </li>
            <li>
              <NavLink to="/contact" className={({ isActive }) => (isActive ? "active" : "")}>
                Contact
              </NavLink>
            </li>
          </ul>
        </nav>
        {/* Mobile Navigation */}
        <div className="mobile-nav">
          <button onClick={toggleMobileMenu} className="menu-button">
            {isMobileMenuOpen ? "Close" : "Menu"}
          </button>
          {isMobileMenuOpen && (
            <div className="mobile-menu">
              <ul>
                <li>
                  <NavLink to="/" onClick={toggleMobileMenu}>
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/about" onClick={toggleMobileMenu}>
                    About
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/services" onClick={toggleMobileMenu}>
                    Services
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/testimonials" onClick={toggleMobileMenu}>
                    Testimonials
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/contact" onClick={toggleMobileMenu}>
                    Contact
                  </NavLink>
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Navbar;