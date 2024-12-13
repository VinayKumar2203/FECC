import React from "react";
import "../styles/Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <div className="logo">
          <span className="brand-tata">TATA</span>
          <span className="brand-cliq">CLIQ</span>
          <span className="brand-fashion">FASHION</span>
        </div>
        <a href="#" className="luxury-link">Tata CLIQ Luxury</a>
      </div>

      <div className="navbar-center">
        <div className="dropdown">
          Categories
          <div className="dropdown-menu">
            <a href="#">Men</a>
            <a href="#">Women</a>
            <a href="#">Kids</a>
            <a href="#">Electronics</a>
          </div>
        </div>
        <div className="dropdown">
          Brands
          <div className="dropdown-menu">
            <a href="#">Nike</a>
            <a href="#">Adidas</a>
            <a href="#">Puma</a>
            <a href="#">Levi's</a>
          </div>
        </div>
        <input
          type="text"
          className="search-box"
          placeholder="Search for Brands"
        />
      </div>

      <div className="navbar-right">
        <a href="#" className="nav-link">CLiQ Cash</a>
        <a href="#" className="nav-link">Gift Card</a>
        <a href="#" className="nav-link">CLiQ Care</a>
        <a href="#" className="nav-link">Track Orders</a>
        <a href="#" className="nav-link">Sign in / Sign Up</a>
        <span className="icon">♥</span>
        <span className="icon">🛒</span>
      </div>
    </nav>
  );
};

export default Navbar;
