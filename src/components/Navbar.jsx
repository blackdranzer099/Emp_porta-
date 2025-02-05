import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Toggle mobile menu
  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (isMobileMenuOpen && !e.target.closest(".mobile-menu")) {
        setIsMobileMenuOpen(false);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, [isMobileMenuOpen]);

  // Detect scroll to apply 'scrolled' class
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={isScrolled ? "scrolled" : ""}>
      <div className="navbar-container">
        {/* Logo */}
        <NavLink
          to="/"
          className="logo"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          aria-label="Home"
        >
          Honor Hive
        </NavLink>

        {/* Desktop Navigation */}
        <nav className="desktop-nav">
          <ul>
            <li>
              <NavLink
                to="/about"
                className={({ isActive }) => (isActive ? "active" : "")}
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                aria-label="About"
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/services"
                className={({ isActive }) => (isActive ? "active" : "")}
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                aria-label="Services"
              >
                Services
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/testimonials"
                className={({ isActive }) => (isActive ? "active" : "")}
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                aria-label="Testimonials"
              >
                Testimonials
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                className={({ isActive }) => (isActive ? "active" : "")}
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                aria-label="Contact"
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </nav>

        {/* Mobile Navigation */}
        <div className="mobile-nav">
          <button
            onClick={toggleMobileMenu}
            className="menu-button"
            aria-label="Toggle Menu"
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? "Close" : "Menu"}
          </button>
          {isMobileMenuOpen && (
            <div className="mobile-menu">
              <ul>
                <li>
                  <NavLink
                    to="/"
                    onClick={() => {
                      toggleMobileMenu();
                      window.scrollTo({ top: 0, behavior: "smooth" });
                    }}
                    aria-label="Home"
                  >
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/about"
                    onClick={() => {
                      toggleMobileMenu();
                      window.scrollTo({ top: 0, behavior: "smooth" });
                    }}
                    aria-label="About"
                  >
                    About
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/services"
                    onClick={() => {
                      toggleMobileMenu();
                      window.scrollTo({ top: 0, behavior: "smooth" });
                    }}
                    aria-label="Services"
                  >
                    Services
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/testimonials"
                    onClick={() => {
                      toggleMobileMenu();
                      window.scrollTo({ top: 0, behavior: "smooth" });
                    }}
                    aria-label="Testimonials"
                  >
                    Testimonials
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/contact"
                    onClick={() => {
                      toggleMobileMenu();
                      window.scrollTo({ top: 0, behavior: "smooth" });
                    }}
                    aria-label="Contact"
                  >
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