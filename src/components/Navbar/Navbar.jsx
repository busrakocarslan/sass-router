import React from "react";
import "./Navbar.scss";
import { Link,NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="nav">
      <NavLink exact to="/" className="nav__link">Home</NavLink>
      <NavLink to="about" className="nav__link" activeClassName="nav__link--active">About</NavLink>
      <NavLink to="projects" className="nav__link" activeClassName="nav__link--active">Gallery</NavLink>
      <NavLink to="contact" className="nav__link" activeClassName="nav__link--active">Contact</NavLink>
    </div>
  );
};

export default Navbar;
