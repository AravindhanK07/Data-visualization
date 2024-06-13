import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <ul>
        <Link to="/">
          <li>Home</li>
        </Link>
        <Link to="/api/data">
          <li>LineGraph</li>
        </Link>
        <Link to="/api/expenses">
          <li>BarGraph</li>
        </Link>
        <Link to="/api/time">
          <li>PieChart</li>
        </Link>
      </ul>
    </div>
  );
};

export default Navbar;
