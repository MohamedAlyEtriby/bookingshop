import React from "react";
import { Link } from "react-router-dom";
import "../App";
const Navbar = () => {
  return (
    <div className="navbar">
      <div>
        <Link to="/">
          <h3>Books</h3>
        </Link>
      </div>
      <div>
        <Link to="/favorites">
          <h3>Your favorites</h3>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
