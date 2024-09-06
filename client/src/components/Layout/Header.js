import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Header.css";

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="navbar">
      <div className="navbar-left">
        <button className="navbar-toggler" type="button" onClick={handleToggle}>
          <i className={isOpen ? "bx bx-x" : "bx bx-menu-alt-left"}></i>
        </button>
        <NavLink to="/" className="logo">
          E Cart
        </NavLink>
        <div className={`nav-links ${isOpen ? "open" : ""}`}>
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink className="nav-link" to="/">
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/about">
                About
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/carts">
                Carts
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/favourites">
                Favourite
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/contact">
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
      </div>

      <div className="navbar-right">
        <form className="form-inline">
          <input className="form-control" placeholder="Search" />
          <button className="btn" type="submit">
            Search
          </button>
        </form>
        <div className="auth-links">
          <NavLink className="nav-link signin" to="/signin">
            Sign In
          </NavLink>
          <NavLink className="nav-link signup" to="/signup">
            Sign Up
          </NavLink>
        </div>
      </div>
    </div>
  );
};
