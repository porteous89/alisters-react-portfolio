import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "../styles/Navbar.css";
import ReorderIcon from "@mui/icons-material/Reorder";
import Button from "@mui/material/Button";

function Navbar() {
  const [expandNavbar, setExpandNavbar] = useState(false);

  const location = useLocation();

  useEffect(() => {
    setExpandNavbar(false);
  }, [location]);

  return (
    <div className="navbar" id={expandNavbar ? "open" : "close"}>
      <div className="toggleButton">
        <button
          onClick={() => {
            setExpandNavbar((prev) => !prev);
          }}
        >
          <ReorderIcon />
        </button>
      </div>
      <div className="links">
      <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/Experience" className="last-link">Experience</Link>
        <a href="https://drive.google.com/file/d/16gucK4Ef-byVdo7A17imS9fRRP59X7fe/view?usp=share_link" target="_blank" rel="noopener noreferrer">
          <Button variant="contained" className="resume-button">
            Resume
          </Button>
        </a>
      </div>
    </div>
  );
}

export default Navbar;