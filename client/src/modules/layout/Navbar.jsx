import React from "react";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <React.Fragment>
      <nav className="navbar navbar-dark bg-dark navbar-expand-md">
        <div className="container">
          <NavLink to="/" className="navbar-brand">
            <i class="fas fa-address-card"></i> Student Mangement
          </NavLink>
        </div>
      </nav>
    </React.Fragment>
  );
}
