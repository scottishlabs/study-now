import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footerWrapper shadow-lg border border-white">
      <div className="navbar navbar-expand-lg navbar-light container">
        <Link to="/" className="nav-link">
          About
        </Link>
        <Link to="/" className="nav-link">
          Contact us
        </Link>
        <Link to="/" className="nav-link">
          Site map
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
